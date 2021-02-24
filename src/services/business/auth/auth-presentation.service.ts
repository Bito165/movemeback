import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PresentationStatus} from '../../../models/auth/PresentationStatus/presentation-status';


@Injectable({
  providedIn: 'root'
})
export class AuthPresentationService {
  message!: string;
  presentationStatus: BehaviorSubject<PresentationStatus> = new BehaviorSubject<PresentationStatus>({isLogin: false, subCaption: '', currentStage: 0});

  constructor() {
  }

  setPresentationStateLogin(): void{
    this.presentationStatus.next({isLogin: true, subCaption: 'Log In', currentStage: 0});
  }

  setPresentationStateSetup(stage: number): void{
    this.presentationStatus.next({isLogin: false, subCaption: 'Your Profile', currentStage: stage});
  }

}
