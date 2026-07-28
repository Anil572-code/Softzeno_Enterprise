import { HTTP_DEFAULTS } from '@/constants/http';
import { ApiError } from '@/services/http/ApiError';
import type { ApiErrorPayload, RequestOptions } from '@/types/http';

function isJsonBody(body: RequestOptions['body']): body is Record<string, unknown> {
  if (!body || typeof body !== 'object') {
    return false;
  }

  const prototype = Object.getPrototypeOf(body) as object | null;
  return prototype === Object.prototype || prototype === null;
}

async function parseResponseBody(response: Response): Promise<unknown> {
  if (response.status === 204 || response.status === 205) {
    return undefined;
  }

  const responseText = await response.text();

  if (!responseText) {
    return undefined;
  }

  const contentType = response.headers.get('content-type');
  return contentType?.includes('application/json')
    ? (JSON.parse(responseText) as unknown)
    : responseText;
}

function noOp(): void {
  // Intentionally empty.
}

function connectAbortSignal(controller: AbortController, externalSignal?: AbortSignal): () => void {
  if (!externalSignal) {
    return noOp;
  }

  const abortFromExternalSignal = () => controller.abort();

  if (externalSignal.aborted) {
    abortFromExternalSignal();
    return noOp;
  }

  externalSignal.addEventListener('abort', abortFromExternalSignal, { once: true });

  return () => externalSignal.removeEventListener('abort', abortFromExternalSignal);
}

export async function request<TResponse = unknown>(
  input: string | URL,
  options: RequestOptions = {},
): Promise<TResponse> {
  const {
    body: requestBody,
    headers: requestHeaders,
    signal: externalSignal,
    timeoutMs = HTTP_DEFAULTS.timeoutMs,
    ...requestInit
  } = options;
  const controller = new AbortController();
  const disconnectAbortSignal = connectAbortSignal(controller, externalSignal ?? undefined);
  const timeoutId = globalThis.setTimeout(() => controller.abort(), timeoutMs);
  const headers = new Headers(HTTP_DEFAULTS.headers);

  new Headers(requestHeaders).forEach((value, key) => headers.set(key, value));

  const body = isJsonBody(requestBody) ? JSON.stringify(requestBody) : requestBody;

  if (isJsonBody(requestBody) && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  try {
    const response = await fetch(input, {
      ...requestInit,
      body: body ?? null,
      headers,
      signal: controller.signal,
    });
    const responseBody = await parseResponseBody(response);

    if (!response.ok) {
      const payload =
        typeof responseBody === 'object' && responseBody !== null
          ? (responseBody as ApiErrorPayload)
          : undefined;
      throw new ApiError(payload?.message ?? response.statusText, response.status, payload);
    }

    return responseBody as TResponse;
  } finally {
    globalThis.clearTimeout(timeoutId);
    disconnectAbortSignal();
  }
}
