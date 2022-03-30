import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableImplComponent } from './available-impl.component';

describe('AvailableImplComponent', () => {
  let component: AvailableImplComponent;
  let fixture: ComponentFixture<AvailableImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableImplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
