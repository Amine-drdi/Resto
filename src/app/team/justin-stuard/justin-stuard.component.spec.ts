import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustinStuardComponent } from './justin-stuard.component';

describe('JustinStuardComponent', () => {
  let component: JustinStuardComponent;
  let fixture: ComponentFixture<JustinStuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustinStuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JustinStuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
