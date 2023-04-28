import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkSandwichComponent } from './pork-sandwich.component';

describe('PorkSandwichComponent', () => {
  let component: PorkSandwichComponent;
  let fixture: ComponentFixture<PorkSandwichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorkSandwichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorkSandwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
