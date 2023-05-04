import { Injectable } from '@angular/core';

import { QuestionBase } from 'src/app/shared/dynamic-form/class/question-base/question-base';
import { TextAreaQuestion } from 'src/app/shared/dynamic-form/class/text-area-question/text-area-question';
import { TextboxQuestion } from 'src/app/shared/dynamic-form/class/textbox-question/textbox-question';;

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'exercise_name',
        label: 'Exercise Name',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'sets',
        label: 'Sets',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getWeightQuestions(): QuestionBase<string>[] {
    const questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'exercise_name',
        label: 'Exercise Name',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'sets',
        label: 'Sets',
        type: 'number',
        order: 2
      }),

      new TextboxQuestion({
        key: 'reps',
        label: 'Reps',
        type: 'number',
        order: 2
      }),

      new TextboxQuestion({
        key: 'rpe',
        label: 'RPE',
        type: 'number',
        order: 2
      }),

      new TextAreaQuestion({
        key: 'notes',
        label: 'Notes',
        order: 2
      })
    ];

    return questions;
  }
}
