import type { ApiErrorPayload } from '@/types/http';

export class ApiError extends Error {
  readonly payload: ApiErrorPayload | undefined;
  readonly status: number;

  constructor(message: string, status: number, payload?: ApiErrorPayload) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.payload = payload;
  }
}
