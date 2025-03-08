export enum PAGE_URL {
  Landing = '/',
  Upload = 'upload',
  TotalEvaluation = 'total-evaluation/:feedbackId',
  Login = 'login',
}

export type PageLabelKey = keyof typeof PAGE_URL;
