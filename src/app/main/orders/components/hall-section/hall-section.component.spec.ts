import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallSectionComponent } from './hall-section.component';

describe('HallSectionComponent', () => {
  let component: HallSectionComponent;
  let fixture: ComponentFixture<HallSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
