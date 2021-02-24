import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {InputDetails} from 'src/models/shared/form-elements/input-details';
import {ButtonDetails} from '../../../../../../models/shared/button/button-details';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @ts-ignore
  @Input() formFields: InputDetails[];
  // @ts-ignore
  @Input() buttonDetails: ButtonDetails;
  @Output() form = new EventEmitter<Form>();
  private passwordFieldChanged!: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void{
    this.form.emit(form);
  }

  inputGroupAction(field: InputDetails): void{
    switch (field.type) {
      case 'password':
        this.changePasswordInput(field);
        break;
      case 'text':
        this.changeTextInput(field);
        break;
      default:
        break;
    }
  }

  changePasswordInput(field: InputDetails): void{
    field.type = 'text';
    field.inputGroupText = 'hide';
    this.passwordFieldChanged = true;
  }

  changeTextInput(field: InputDetails): void{
    if (this.passwordFieldChanged){
      field.type = 'password';
      field.inputGroupText = 'show';
      this.passwordFieldChanged = false;
    }
  }

}
