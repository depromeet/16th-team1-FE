export type ReIssue = {
  status: string;
  code: string;
  message: string;
  result: {
    accessToken: string;
    expirationTime: string;
  };
};
