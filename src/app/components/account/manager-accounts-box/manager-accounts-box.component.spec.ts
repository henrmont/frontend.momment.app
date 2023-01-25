import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAccountsBoxComponent } from './manager-accounts-box.component';

describe('ManagerAccountsBoxComponent', () => {
  let component: ManagerAccountsBoxComponent;
  let fixture: ComponentFixture<ManagerAccountsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAccountsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAccountsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
