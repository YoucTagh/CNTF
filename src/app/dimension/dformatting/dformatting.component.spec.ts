import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DFormattingComponent } from './dformatting.component';

describe('DFormattingComponent', () => {
  let component: DFormattingComponent;
  let fixture: ComponentFixture<DFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DFormattingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
