import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OVisualisationComponent } from './o-visualisation.component';

describe('OVisualisationComponent', () => {
  let component: OVisualisationComponent;
  let fixture: ComponentFixture<OVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OVisualisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
