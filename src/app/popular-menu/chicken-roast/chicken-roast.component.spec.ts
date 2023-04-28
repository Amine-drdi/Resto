import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenRoastComponent } from './chicken-roast.component';

describe('ChickenRoastComponent', () => {
  let component: ChickenRoastComponent;
  let fixture: ComponentFixture<ChickenRoastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenRoastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenRoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
