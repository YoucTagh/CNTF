import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DConveyanceListComponent } from './dconveyance-list.component';

describe('DConveyanceListComponent', () => {
  let component: DConveyanceListComponent;
  let fixture: ComponentFixture<DConveyanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DConveyanceListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DConveyanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
