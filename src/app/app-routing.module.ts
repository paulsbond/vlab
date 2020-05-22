import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentComponent } from './experiment/experiment.component';

const routes: Routes = [
  { path: '', component: ExperimentsComponent },
  { path: 'experiment', component: ExperimentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
