import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { AppRoutingModule } from './app-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { GcComponent } from './gc/gc.component';
import { DilutionComponent } from './dilution/dilution.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentComponent } from './experiment/experiment.component';

@NgModule({
  declarations: [AppComponent, GcComponent, DilutionComponent, ExperimentsComponent, ExperimentComponent],
  imports: [
    BrowserModule,
    ContenteditableModule,
    FormsModule,
    GoogleChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
