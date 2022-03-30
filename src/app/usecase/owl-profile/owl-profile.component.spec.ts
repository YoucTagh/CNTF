import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlProfileComponent } from './owl-profile.component';

describe('OwlProfileComponent', () => {
  let component: OwlProfileComponent;
  let fixture: ComponentFixture<OwlProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
