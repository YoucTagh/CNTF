import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSummaryComponent } from './dsummary.component';

describe('DSummaryComponent', () => {
  let component: DSummaryComponent;
  let fixture: ComponentFixture<DSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
