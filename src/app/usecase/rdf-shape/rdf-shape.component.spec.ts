import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCaseItemComponent } from './rdf-shape.component';

describe('UseCaseItemComponent', () => {
  let component: UseCaseItemComponent;
  let fixture: ComponentFixture<UseCaseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCaseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseCaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
