import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndianBurgerComponent } from './indian-burger.component';

describe('IndianBurgerComponent', () => {
  let component: IndianBurgerComponent;
  let fixture: ComponentFixture<IndianBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndianBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndianBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
