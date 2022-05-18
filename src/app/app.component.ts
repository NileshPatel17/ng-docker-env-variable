import { Component } from '@angular/core';
import Config from '../config.json'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamically Set Angular Environment Variables in Docker';
  environment = Config.ENV;
  baseUrl = Config.BASE_URL;
}
