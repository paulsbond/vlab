import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

interface Config {
  title: string;
  footer: string;
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  title: string;
  footer: string;

  constructor(private http: HttpClient, private titleService: Title) {
    const url = document.baseURI + '/assets/config.json';
    this.http.get(url).subscribe((config: Config) => {
      this.titleService.setTitle(config.title);

      this.title = config.title;
      this.footer = config.footer;
    });
  }
}
