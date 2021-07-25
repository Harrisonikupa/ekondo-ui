import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconThreeComponent } from './icon-three.component';

describe('IconThreeComponent', () => {
  let component: IconThreeComponent;
  let fixture: ComponentFixture<IconThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
