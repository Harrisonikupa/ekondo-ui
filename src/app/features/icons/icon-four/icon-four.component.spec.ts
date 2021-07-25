import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconFourComponent } from './icon-four.component';

describe('IconFourComponent', () => {
  let component: IconFourComponent;
  let fixture: ComponentFixture<IconFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
