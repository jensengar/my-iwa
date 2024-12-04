import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import GenesysCloudWebrtSdk from 'genesys-cloud-webrtc-sdk';
import { InitService } from './services/init/init.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-iwa';

  constructor(private initService: InitService) {

  }
  
  ngOnInit() {
    this.initService.init();
  }
}
