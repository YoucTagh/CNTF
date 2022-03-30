import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundMainComponent } from './playground-main.component';

describe('PlaygroundMainComponent', () => {
  let component: PlaygroundMainComponent;
  let fixture: ComponentFixture<PlaygroundMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaygroundMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
