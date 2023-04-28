import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterDelightComponent } from './easter-delight.component';

describe('EasterDelightComponent', () => {
  let component: EasterDelightComponent;
  let fixture: ComponentFixture<EasterDelightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterDelightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasterDelightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
