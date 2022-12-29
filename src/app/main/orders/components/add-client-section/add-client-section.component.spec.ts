import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientSectionComponent } from './add-client-section.component';

describe('AddClientSectionComponent', () => {
  let component: AddClientSectionComponent;
  let fixture: ComponentFixture<AddClientSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
