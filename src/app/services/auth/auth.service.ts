import { Injectable } from '@angular/core';
import { Enviroments, SavedAuthData } from '../../../types';
// import platformClient, { ApiClientClass } from 'purecloud-platform-client-v2';

const AUTH_DATA_KEY = 'mhauthData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // client = platformClient.ApiClient.instance;
  constructor() { }

  isAuthenticated () {
    // verify token exists and is not expired
    const authData = this.getAuthData();
    if (!authData || !authData.expires) {
      return false;
    }
    const now = new Date();
    const expiresAt = new Date(authData.expires);
    return now < expiresAt;
  }

  async isAuthenticatedWithVerification (): Promise<boolean> {
    if (this.isAuthenticated()) {
      const authData = this.getAuthData()!;
      const result = await this.verifyToken(authData.accessToken, authData.envKey);
      return result.verified
    }

    return false;
  }

  getAuthData (): SavedAuthData | undefined  {
    // TODO: don't commit this
    return;
    // return {
    //   accessToken: 'nr6BoxVB50sv3Xdj4k-CUarLLaQfrhh-04_F7LXu0EizaTAbA32crbiRB1IxqEb_UXBe7kzGYVB1AI4z008L5Q',
    //   envKey: 'inindca.com',
    //   expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    // };

    // const savedData = localStorage.getItem(AUTH_DATA_KEY);
    // if (!savedData) {
    //   return;
    // }

    // try {
    //   const parsedData = JSON.parse(savedData);
    //   return parsedData as SavedAuthData;
    // } catch (err) {
    //   console.error('Failed to parse auth data from local storage', err);
    //   return;
    // }
  }

  async verifyToken (token: string, envUri: Enviroments): Promise<{verified: boolean}> {
    return { verified: true };
    // this.client.setEnvironment(envUri);
    // this.client.setAccessToken(token);
    // const tokensApi = new platformClient.TokensApi();
    // try {
    //   await tokensApi.getTokensMe();
    //   return {verified: true};
    // } catch (e) {
    //   console.error('Failed to verify token', e);
    //   return {verified: false};
    // }
  }

  async authenticate (): Promise<void> {
    if (await this.isAuthenticatedWithVerification()) {
      return;
    }

    
  }
}
