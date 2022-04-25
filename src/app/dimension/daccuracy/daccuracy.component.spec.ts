import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAccuracyComponent } from './daccuracy.component';

describe('DAccuracyComponent', () => {
  let component: DAccuracyComponent;
  let fixture: ComponentFixture<DAccuracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAccuracyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAccuracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
