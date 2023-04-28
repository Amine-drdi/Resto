import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoneyMeatComponent } from './honey-meat.component';

describe('HoneyMeatComponent', () => {
  let component: HoneyMeatComponent;
  let fixture: ComponentFixture<HoneyMeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoneyMeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoneyMeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
