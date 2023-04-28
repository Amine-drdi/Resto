import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerCookingComponent } from './summer-cooking.component';

describe('SummerCookingComponent', () => {
  let component: SummerCookingComponent;
  let fixture: ComponentFixture<SummerCookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummerCookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummerCookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
