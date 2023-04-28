import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TienerSchnitzeComponent } from './tiener-schnitze.component';

describe('TienerSchnitzeComponent', () => {
  let component: TienerSchnitzeComponent;
  let fixture: ComponentFixture<TienerSchnitzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TienerSchnitzeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TienerSchnitzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
