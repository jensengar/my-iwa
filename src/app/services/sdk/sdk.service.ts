import { Injectable } from '@angular/core';
import GenesysCloudWebrtSdk from 'genesys-cloud-webrtc-sdk';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SdkService {
  sdk!: GenesysCloudWebrtSdk;

  constructor(private authService: AuthService) { }

  async initSdk() {
    const authData = this.authService.getAuthData()!;

    this.sdk = new GenesysCloudWebrtSdk({
      environment: authData.envKey,
      accessToken: authData.accessToken });

    await this.sdk.initialize();
  }
}
