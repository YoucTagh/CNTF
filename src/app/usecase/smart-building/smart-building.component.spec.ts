import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBuildingComponent } from './smart-building.component';

describe('SmartBuildingComponent', () => {
  let component: SmartBuildingComponent;
  let fixture: ComponentFixture<SmartBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
