import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCURLComponent } from './cc-url.component';

describe('CCURLComponent', () => {
  let component: CCURLComponent;
  let fixture: ComponentFixture<CCURLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCURLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCURLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
