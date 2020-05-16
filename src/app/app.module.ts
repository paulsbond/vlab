import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { GcComponent } from './gc/gc.component';

@NgModule({
  declarations: [AppComponent, GcComponent],
  imports: [BrowserModule, FormsModule, GoogleChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
