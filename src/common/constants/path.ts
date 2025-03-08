export enum PAGE_URL {
  Landing = '/',
  Upload = 'upload',
  TotalEvaluation = 'total-evaluation',
  Login = 'login',
}

export type PageUrlType = (typeof PAGE_URL)[keyof typeof PAGE_URL];
