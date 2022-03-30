import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DEncodingComponent } from './dencoding.component';

describe('DEncodingComponent', () => {
  let component: DEncodingComponent;
  let fixture: ComponentFixture<DEncodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DEncodingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DEncodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
