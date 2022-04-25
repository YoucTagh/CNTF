import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DOwlProfileComponent } from './dowl-profile.component';

describe('DOwlProfileComponent', () => {
  let component: DOwlProfileComponent;
  let fixture: ComponentFixture<DOwlProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DOwlProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DOwlProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
