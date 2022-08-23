import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ContenteditableModule } from '@ng-stack/contenteditable';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConductivityComponent } from './conductivity/conductivity.component';
import { CvComponent } from './cv/cv.component';
import { DilutionComponent } from './dilution/dilution.component';
import { ExperimentComponent } from './experiment/experiment.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { GcComponent } from './gc/gc.component';
import { HplcComponent } from './hplc/hplc.component';
import { SettingsComponent } from './settings/settings.component';
import { UvvisFixedComponent } from './uvvis-fixed/uvvis-fixed.component';
import { UvvisScanningComponent } from './uvvis-scanning/uvvis-scanning.component';

import { ImageUrlPipe } from './image-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConductivityComponent,
    CvComponent,
    DilutionComponent,
    ExperimentComponent,
    ExperimentsComponent,
    GcComponent,
    HplcComponent,
    ImageUrlPipe,
    SettingsComponent,
    UvvisFixedComponent,
    UvvisScanningComponent
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
