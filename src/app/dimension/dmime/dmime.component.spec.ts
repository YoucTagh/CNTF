import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMimeComponent } from './dmime.component';

describe('DMimeComponent', () => {
  let component: DMimeComponent;
  let fixture: ComponentFixture<DMimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DMimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DMimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
