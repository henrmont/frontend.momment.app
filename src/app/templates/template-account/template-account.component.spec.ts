import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateAccountComponent } from './template-account.component';

describe('TemplateAccountComponent', () => {
  let component: TemplateAccountComponent;
  let fixture: ComponentFixture<TemplateAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
