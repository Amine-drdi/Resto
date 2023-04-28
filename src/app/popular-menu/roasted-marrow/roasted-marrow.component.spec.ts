import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoastedMarrowComponent } from './roasted-marrow.component';

describe('RoastedMarrowComponent', () => {
  let component: RoastedMarrowComponent;
  let fixture: ComponentFixture<RoastedMarrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoastedMarrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoastedMarrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
