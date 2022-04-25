import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ODocumentationComponent } from './o-documentation.component';

describe('ODocumentationComponent', () => {
  let component: ODocumentationComponent;
  let fixture: ComponentFixture<ODocumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ODocumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ODocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
