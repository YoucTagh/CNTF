import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCharSetComponent } from './dchar-set.component';

describe('DCharSetComponent', () => {
  let component: DCharSetComponent;
  let fixture: ComponentFixture<DCharSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCharSetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCharSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
