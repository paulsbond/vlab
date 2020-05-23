import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DilutionComponent } from './dilution/dilution.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { GcComponent } from './gc/gc.component';
import { HplcComponent } from './hplc/hplc.component';

@NgModule({
  declarations: [
    AppComponent,
    DilutionComponent,
    ExperimentComponent,
    ExperimentsComponent,
    GcComponent,
    HplcComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContenteditableModule,
    FormsModule,
    GoogleChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
