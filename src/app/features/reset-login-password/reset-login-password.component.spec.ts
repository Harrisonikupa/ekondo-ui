import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetLoginPasswordComponent } from './reset-login-password.component';

describe('ResetLoginPasswordComponent', () => {
  let component: ResetLoginPasswordComponent;
  let fixture: ComponentFixture<ResetLoginPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetLoginPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetLoginPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
