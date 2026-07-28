export interface ApiErrorPayload {
  code?: string;
  details?: unknown;
  message?: string;
}

export interface RequestOptions extends Omit<RequestInit, 'body'> {
  body?: BodyInit | Record<string, unknown>;
  timeoutMs?: number;
}
