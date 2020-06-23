import { Component } from '@angular/core';
import config from './config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = config.title;
  footer = config.footer;
  constructor() {}
  ngOnInit() {}
}
