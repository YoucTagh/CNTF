import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAdaptiveComponent } from './sadaptive.component';

describe('SAdaptiveComponent', () => {
  let component: SAdaptiveComponent;
  let fixture: ComponentFixture<SAdaptiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAdaptiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAdaptiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
