import {Component, Input, OnInit} from '@angular/core';
import {ButtonDetails} from '../../../../../../models/shared/button/button-details';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.component.html',
  styleUrls: ['./button-outline.component.css']
})
export class ButtonOutlineComponent implements OnInit {
  // @ts-ignore
  @Input() buttonDetails: ButtonDetails;
  constructor() { }


  ngOnInit(): void {
  }

}
