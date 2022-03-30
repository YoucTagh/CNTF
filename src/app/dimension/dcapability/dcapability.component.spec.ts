import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCapabilityComponent } from './dcapability.component';

describe('DCapabilityComponent', () => {
  let component: DCapabilityComponent;
  let fixture: ComponentFixture<DCapabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCapabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCapabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
