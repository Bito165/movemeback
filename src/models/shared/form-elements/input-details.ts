import {NgModel} from '@angular/forms';
import {ButtonDetails} from '../button/button-details';

export interface InputDetails {
  type: string;
  name: string;
  hasLabel: boolean;
  placeholder: string;
  required: boolean;
  value?: string;
  labelName?: string;
  minLength?: number;
  maxLength?: number;
  regexPattern?: RegExp;
  autocomplete?: boolean;
  inputMode?: string;
  isInputGroup?: boolean;
  inputGroupText?: string;
}
