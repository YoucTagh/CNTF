import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SActiveComponent } from './sactive.component';

describe('SActiveComponent', () => {
  let component: SActiveComponent;
  let fixture: ComponentFixture<SActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
