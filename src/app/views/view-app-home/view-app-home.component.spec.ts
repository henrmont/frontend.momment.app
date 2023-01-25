import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppHomeComponent } from './view-app-home.component';

describe('ViewAppHomeComponent', () => {
  let component: ViewAppHomeComponent;
  let fixture: ComponentFixture<ViewAppHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAppHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAppHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
