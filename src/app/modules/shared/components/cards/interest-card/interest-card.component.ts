import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { UserInterest } from 'src/models/shared/cards/user-interest';

@Component({
  selector: 'app-interest-card',
  templateUrl: './interest-card.component.html',
  styleUrls: ['./interest-card.component.css']
})
export class InterestCardComponent implements OnInit {
  @Input() interestDetails!: UserInterest;
  @Output() interest = new EventEmitter<UserInterest>();
  constructor() { }

  ngOnInit(): void {
  }

  selectInterest(): void{
    this.interest.emit(this.interestDetails);
  }

}
