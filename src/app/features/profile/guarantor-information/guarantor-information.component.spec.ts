import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuarantorInformationComponent } from './guarantor-information.component';

describe('GuarantorInformationComponent', () => {
  let component: GuarantorInformationComponent;
  let fixture: ComponentFixture<GuarantorInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuarantorInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuarantorInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
