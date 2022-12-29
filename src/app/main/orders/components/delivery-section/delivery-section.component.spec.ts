import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverySectionComponent } from './delivery-section.component';

describe('DeliverySectionComponent', () => {
  let component: DeliverySectionComponent;
  let fixture: ComponentFixture<DeliverySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverySectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
