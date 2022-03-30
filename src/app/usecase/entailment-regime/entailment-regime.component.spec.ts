import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntailmentRegimeComponent } from './entailment-regime.component';

describe('EntailmentRegimeComponent', () => {
  let component: EntailmentRegimeComponent;
  let fixture: ComponentFixture<EntailmentRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntailmentRegimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntailmentRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
