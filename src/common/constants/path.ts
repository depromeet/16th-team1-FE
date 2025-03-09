export enum PAGE_URL {
  Landing = '/',
  Upload = 'upload',
  TotalEvaluation = 'total-evaluation',
  Login = 'login',
}

export type PageLabelKey = keyof typeof PAGE_URL;
