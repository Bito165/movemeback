import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionBadgesComponent } from './option-badges.component';

describe('OptionBadgesComponent', () => {
  let component: OptionBadgesComponent;
  let fixture: ComponentFixture<OptionBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionBadgesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
