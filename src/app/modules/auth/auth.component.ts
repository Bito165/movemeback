import { Component, OnInit, AfterContentInit } from '@angular/core';
import {AuthPresentationService} from '../../../services/business/auth/auth-presentation.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, AfterContentInit {
  subCaption!: string;
  isLogin!: boolean;
  stage = 0;
  constructor(private presentationStatus: AuthPresentationService) {
  }

  ngOnInit(): void {
    this.isLogin = true;
  }

  ngAfterContentInit(): void{
    this.presentationStatus.presentationStatus.subscribe(
      res => {
        this.subCaption = res.subCaption;
        this.isLogin = res.isLogin;
        if (!this.isLogin){
          this.stage = res.currentStage;
        }
      }
    );
  }

}
