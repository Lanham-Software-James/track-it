import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';



@NgModule({
  declarations: [
    DynamicFormQuestionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormModule { }
