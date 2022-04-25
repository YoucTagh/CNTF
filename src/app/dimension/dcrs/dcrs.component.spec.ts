import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DCRSComponent } from './dcrs.component';

describe('DCRSComponent', () => {
  let component: DCRSComponent;
  let fixture: ComponentFixture<DCRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DCRSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DCRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
