import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { SdkService } from '../sdk/sdk.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private authService: AuthService, private sdkService: SdkService) { }

  public async init(): Promise<void> {
    const isAuthenticated = await this.authService.isAuthenticatedWithVerification();
    if (!isAuthenticated) {
      return;
    }

    await this.sdkService.initSdk()
  }
}
