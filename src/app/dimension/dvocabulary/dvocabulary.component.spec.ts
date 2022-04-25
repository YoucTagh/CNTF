import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DVocabularyComponent } from './dvocabulary.component';

describe('DVocabularyComponent', () => {
  let component: DVocabularyComponent;
  let fixture: ComponentFixture<DVocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DVocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
