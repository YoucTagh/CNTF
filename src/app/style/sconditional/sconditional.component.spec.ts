import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SConditionalComponent } from './sconditional.component';

describe('SConditionalComponent', () => {
  let component: SConditionalComponent;
  let fixture: ComponentFixture<SConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
