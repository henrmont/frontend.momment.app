import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountResetPasswordComponent } from './view-account-reset-password.component';

describe('ViewAccountResetPasswordComponent', () => {
  let component: ViewAccountResetPasswordComponent;
  let fixture: ComponentFixture<ViewAccountResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAccountResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
