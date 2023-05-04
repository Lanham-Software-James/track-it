import { QuestionBase } from "../question-base/question-base";

export class TextAreaQuestion extends QuestionBase<string> {
  override controlType = 'textarea';
}