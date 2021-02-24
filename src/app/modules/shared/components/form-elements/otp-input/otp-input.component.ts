import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.css']
})
export class OtpInputComponent implements OnInit {
  value: string;
  constructor() { }

  ngOnInit(): void {
    this.value = '';
  }

  checkLength(): boolean{
    if (this.value.length === 4) {
      return false;
    }
  }

  inputParser(): void{
    this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
  }

}
