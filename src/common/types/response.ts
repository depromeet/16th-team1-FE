export type Response<T> = {
  status: string;
  code: string;
  message: string;
  result: T;
};
