import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SReactiveComponent } from './sreactive.component';

describe('SReactiveComponent', () => {
  let component: SReactiveComponent;
  let fixture: ComponentFixture<SReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
