import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSolidComponent } from './button-solid.component';

describe('ButtonSolidComponent', () => {
  let component: ButtonSolidComponent;
  let fixture: ComponentFixture<ButtonSolidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSolidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
