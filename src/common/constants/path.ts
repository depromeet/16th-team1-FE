export enum PAGE_URL {
  Landing = '/',
  Upload = 'upload',
  TotalEvaluation = 'total-evaluation',
  Login = 'login',
  Loading = 'loading',
}

export type PageLabelKey = keyof typeof PAGE_URL;
