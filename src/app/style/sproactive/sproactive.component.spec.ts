import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SProactiveComponent } from './sproactive.component';

describe('SProactiveComponent', () => {
  let component: SProactiveComponent;
  let fixture: ComponentFixture<SProactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SProactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SProactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
