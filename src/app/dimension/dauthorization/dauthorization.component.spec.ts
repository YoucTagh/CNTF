import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DAuthorizationComponent } from './dauthorization.component';

describe('DAuthorizationComponent', () => {
  let component: DAuthorizationComponent;
  let fixture: ComponentFixture<DAuthorizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DAuthorizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
