import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {InputDetails} from 'src/models/shared/form-elements/input-details';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // @ts-ignore
  @Input() inputDetails: InputDetails;
  @Output() ngModel = new EventEmitter<string>();
  // @ts-ignore
  passwordFieldChanged: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  inputGroupAction(): void{
    switch (this.inputDetails.type) {
      case 'password':
        this.changePasswordInput();
        break;
      case 'text':
        this.changeTextInput();
        break;
      default:
        break;
    }
  }

  changePasswordInput(): void{
    this.inputDetails.type = 'text';
    this.inputDetails.inputGroupText = 'hide';
    this.passwordFieldChanged = true;
  }

  changeTextInput(): void{
    if (this.passwordFieldChanged){
      this.inputDetails.type = 'password';
      this.inputDetails.inputGroupText = 'show';
      this.passwordFieldChanged = false;
    }
  }

  onInput(event: any): void{
    this.ngModel.emit(event);
  }

}
