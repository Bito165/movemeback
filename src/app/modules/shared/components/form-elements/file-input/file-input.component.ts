import {Component, Input, OnInit} from '@angular/core';
import {InputDetails} from '../../../../../../models/shared/form-elements/input-details';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {
  @Input() fileInputDetails: InputDetails | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
