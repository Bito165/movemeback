import { Component, Input, OnInit } from '@angular/core';
import {ButtonDetails} from '../../../../../../models/shared/button/button-details';

@Component({
  selector: 'app-button-solid',
  templateUrl: './button-solid.component.html',
  styleUrls: ['./button-solid.component.css']
})
export class ButtonSolidComponent implements OnInit {
  // @ts-ignore
  @Input() buttonDetails: ButtonDetails;
  constructor() { }

  ngOnInit(): void {
  }

}
