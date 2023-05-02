import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CreateWorkoutComponent } from './component/create-workout/create-workout.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: CreateWorkoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkoutRoutingModule { }
