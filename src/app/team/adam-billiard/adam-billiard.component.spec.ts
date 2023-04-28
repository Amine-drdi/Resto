import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamBilliardComponent } from './adam-billiard.component';

describe('AdamBilliardComponent', () => {
  let component: AdamBilliardComponent;
  let fixture: ComponentFixture<AdamBilliardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdamBilliardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdamBilliardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
