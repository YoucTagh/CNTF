import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVersionComponent } from './dversion.component';

describe('DVersionComponent', () => {
  let component: DVersionComponent;
  let fixture: ComponentFixture<DVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
