import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCHeadersComponent } from './cc-headers.component';

describe('CCHeadersComponent', () => {
  let component: CCHeadersComponent;
  let fixture: ComponentFixture<CCHeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCHeadersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
