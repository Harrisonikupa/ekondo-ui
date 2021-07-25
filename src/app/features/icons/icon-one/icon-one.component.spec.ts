import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOneComponent } from './icon-one.component';

describe('IconOneComponent', () => {
  let component: IconOneComponent;
  let fixture: ComponentFixture<IconOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
