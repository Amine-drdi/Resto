import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FredMacyardComponent } from './fred-macyard.component';

describe('FredMacyardComponent', () => {
  let component: FredMacyardComponent;
  let fixture: ComponentFixture<FredMacyardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FredMacyardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FredMacyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
