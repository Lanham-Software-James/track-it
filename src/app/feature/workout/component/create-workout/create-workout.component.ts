import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionBase } from 'src/app/shared/dynamic-form/class/question-base/question-base';
import { QuestionControlService } from 'src/app/shared/dynamic-form/service/question-control/question-control.service';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-create-workout',
  templateUrl: './create-workout.component.html',
  styleUrls: ['./create-workout.component.scss'],
  providers:  [QuestionService]
})

export class CreateWorkoutComponent implements OnInit{

  createWorkout!: FormGroup; 
  questions: QuestionBase<any>[][] = [];

  constructor(
    private fb: FormBuilder,
    private service: QuestionService,
    private questionControlService: QuestionControlService){  }

  ngOnInit(): void {
    let first_exercise_group = this.service.getWeightQuestions();
    this.questions.push(first_exercise_group);

    this.createWorkout = this.fb.group({
      workoutName: ['', Validators.required],
      exercises: this.fb.array([
        this.questionControlService.toFormGroup(first_exercise_group)
      ])
    });
  }

  get exercises(): FormArray {
    return this.createWorkout.get('exercises') as FormArray;
  }

  addExercise(): void {
    let exercise_group: QuestionBase<string>[] = this.service.getWeightQuestions();

    this.questions.push(exercise_group);
    this.exercises.push(this.questionControlService.toFormGroup(exercise_group));
  }

  saveWorkout(): void {
    console.log(this.createWorkout);
  }
}