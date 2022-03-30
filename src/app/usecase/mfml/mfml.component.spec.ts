import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MFMLComponent } from './mfml.component';

describe('MFMLComponent', () => {
  let component: MFMLComponent;
  let fixture: ComponentFixture<MFMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MFMLComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MFMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
