import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountAuthComponent } from './view-account-auth.component';

describe('ViewAccountAuthComponent', () => {
  let component: ViewAccountAuthComponent;
  let fixture: ComponentFixture<ViewAccountAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAccountAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAccountAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
