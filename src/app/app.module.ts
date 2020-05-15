import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
