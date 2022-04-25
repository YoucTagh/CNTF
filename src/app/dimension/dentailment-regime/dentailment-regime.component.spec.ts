import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEntailmentRegimeComponent } from './dentailment-regime.component';

describe('DEntailmentRegimeComponent', () => {
  let component: DEntailmentRegimeComponent;
  let fixture: ComponentFixture<DEntailmentRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEntailmentRegimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DEntailmentRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
