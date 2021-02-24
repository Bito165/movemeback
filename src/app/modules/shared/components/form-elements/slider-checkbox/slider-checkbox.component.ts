import { Component, OnInit, Input } from '@angular/core';
import {SliderCheckBox} from '../../../../../../models/shared/form-elements/slider-check-box';

@Component({
  selector: 'app-slider-checkbox',
  templateUrl: './slider-checkbox.component.html',
  styleUrls: ['./slider-checkbox.component.css']
})
export class SliderCheckboxComponent implements OnInit {
  @Input() checkBox: SliderCheckBox;
  constructor() { }

  ngOnInit(): void {
  }

}
