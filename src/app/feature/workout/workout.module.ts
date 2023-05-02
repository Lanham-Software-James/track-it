import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateWorkoutComponent } from './component/create-workout/create-workout.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateWorkoutComponent
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
