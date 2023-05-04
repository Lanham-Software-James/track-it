import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { DynamicFormQuestionComponent } from './component/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './component/dynamic-form/dynamic-form.component';




@NgModule({
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class DynamicFormModule { }
