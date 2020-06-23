import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConductivityComponent } from './conductivity/conductivity.component';
import { DilutionComponent } from './dilution/dilution.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { GcComponent } from './gc/gc.component';
import { HplcComponent } from './hplc/hplc.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    ConductivityComponent,
    DilutionComponent,
    ExperimentComponent,
    ExperimentsComponent,
    GcComponent,
    HplcComponent,
    SettingsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ContenteditableModule,
    FormsModule,
    GoogleChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
