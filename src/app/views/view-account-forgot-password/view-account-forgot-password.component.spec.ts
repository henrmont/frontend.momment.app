import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountForgotPasswordComponent } from './view-account-forgot-password.component';

describe('ViewAccountForgotPasswordComponent', () => {
  let component: ViewAccountForgotPasswordComponent;
  let fixture: ComponentFixture<ViewAccountForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountForgotPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAccountForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
