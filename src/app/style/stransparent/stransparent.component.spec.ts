import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STransparentComponent } from './stransparent.component';

describe('STransparentComponent', () => {
  let component: STransparentComponent;
  let fixture: ComponentFixture<STransparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STransparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STransparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
