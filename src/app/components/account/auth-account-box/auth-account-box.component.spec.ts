import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthAccountBoxComponent } from './auth-account-box.component';

describe('AuthAccountBoxComponent', () => {
  let component: AuthAccountBoxComponent;
  let fixture: ComponentFixture<AuthAccountBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthAccountBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthAccountBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
