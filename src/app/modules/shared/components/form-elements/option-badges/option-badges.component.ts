import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {BadgeDetails} from 'src/models/shared/form-elements/badge-details';

@Component({
  selector: 'app-option-badges',
  templateUrl: './option-badges.component.html',
  styleUrls: ['./option-badges.component.css']
})
export class OptionBadgesComponent implements OnInit {
  @Input() badgeDetails!: BadgeDetails;
  @Output() cancel = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  cancelEvent(): void{
    this.cancel.emit();
  }

}
