import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss']
})

export class CreateWorkoutComponent {

  createWorkout = this.fb.group({
    workoutName: ['', Validators.required],
    exercises: this.fb.array([
      this.generateExerciseGroup()
    ])
  });

  constructor(private fb: FormBuilder){

  }

  get exercises(): FormArray {
    return this.createWorkout.get('exercises') as FormArray;
  }

  addExercise(): void {
    this.exercises.push(this.generateExerciseGroup());
  }

  saveWorkout(): void {

  }

  generateExerciseGroup(): FormGroup {
    return this.fb.group({
      exercise_name: [''],
      sets:[''],
      reps:[''],
      rpe:[''],
      notes:['']
    })
  }
}