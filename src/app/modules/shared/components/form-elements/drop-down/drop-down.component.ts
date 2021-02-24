import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {
  @Input() dropDownDetails:{title:string, options:[{text:string, value:string}]}
  selectedOption:{text:string, value:string}
  constructor() { }

  ngOnInit(): void {

  }

}
