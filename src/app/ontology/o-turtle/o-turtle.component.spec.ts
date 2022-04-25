import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OTurtleComponent } from './o-turtle.component';

describe('OTurtleComponent', () => {
  let component: OTurtleComponent;
  let fixture: ComponentFixture<OTurtleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OTurtleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OTurtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
