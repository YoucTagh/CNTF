import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCListComponent } from './cc-list.component';

describe('CCListComponent', () => {
  let component: CCListComponent;
  let fixture: ComponentFixture<CCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
