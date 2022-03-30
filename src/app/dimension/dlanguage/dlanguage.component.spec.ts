import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DLanguageComponent } from './dlanguage.component';

describe('DLanguageComponent', () => {
  let component: DLanguageComponent;
  let fixture: ComponentFixture<DLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
