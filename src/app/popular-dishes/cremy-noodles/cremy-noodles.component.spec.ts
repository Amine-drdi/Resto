import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CremyNoodlesComponent } from './cremy-noodles.component';

describe('CremyNoodlesComponent', () => {
  let component: CremyNoodlesComponent;
  let fixture: ComponentFixture<CremyNoodlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CremyNoodlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CremyNoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
