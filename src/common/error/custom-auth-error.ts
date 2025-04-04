import { AxiosError } from 'axios';

export class CustomAuthError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const catchAuthError = (error: unknown) => {
  if (error instanceof AxiosError) {
    if (error.response) {
      const statusCode = error.response.status;
      const messageFromServer = error.response.data?.message || error.message;
      throw new CustomAuthError(messageFromServer, statusCode);
    }
    throw new CustomAuthError(error.message, 500);
  }
  throw error;
};
