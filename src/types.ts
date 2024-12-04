
export type SavedAuthData = {
  accessToken: string;
  envKey: Enviroments;
  expires?: Date;
};

export type Enviroments = 
  'mypurecloud.com' |
  'mypurecloud.com.au' |
  'mypurecloud.jp' |
  'mypurecloud.de' |
  'mypurecloud.ie' |
  'usw2.pure.cloud' |
  'cac1.pure.cloud' |
  'euw2.pure.cloud' |
  'apne2.pure.cloud' |
  'aps1.pure.cloud' |
  'use2.us-gov-pure.cloud' |
  'use2.maximus-pure.cloud' |

  'inintca.com' |
  'inindca.com' |
  'localhost';