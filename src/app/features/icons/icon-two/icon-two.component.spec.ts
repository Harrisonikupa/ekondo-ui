import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTwoComponent } from './icon-two.component';

describe('IconTwoComponent', () => {
  let component: IconTwoComponent;
  let fixture: ComponentFixture<IconTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
