import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { GcComponent } from './gc/gc.component';
import { DilutionComponent } from './dilution/dilution.component';

@NgModule({
  declarations: [AppComponent, GcComponent, DilutionComponent],
  imports: [
    BrowserModule,
    ContenteditableModule,
    FormsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
