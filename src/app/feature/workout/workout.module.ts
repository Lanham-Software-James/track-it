import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { WorkoutRoutingModule } from './workout-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CreateWorkoutComponent } from './component/create-workout/create-workout.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateWorkoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WorkoutRoutingModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class WorkoutModule { }
