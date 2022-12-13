import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartFoodCardComponent } from './cart-food-card.component';

describe('CartFoodCardComponent', () => {
  let component: CartFoodCardComponent;
  let fixture: ComponentFixture<CartFoodCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartFoodCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartFoodCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
