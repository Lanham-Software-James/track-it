import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss']
})

export class CreateWorkoutComponent {

  exerciseFormGroup: FormGroup = this.fb.group({
    exercise_name: [''],
    sets:[''],
    reps:[''],
    rpe:[''],
    notes:['']
  })

  createWorkout = this.fb.group({
    workoutName: ['', Validators.required],
    exercises: this.fb.array([
      this.exerciseFormGroup
    ])
  });

  constructor(private fb: FormBuilder){

  }

  get exercises(): FormArray {
    return this.createWorkout.get('exercises') as FormArray;
  }

  addExercise(): void {
    this.exercises.push(this.exerciseFormGroup);
  }

  saveWorkout(): void {
    this.exercises.controls.forEach(value => {
      console.log(value.value);
    });
  }
}