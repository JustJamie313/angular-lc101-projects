import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeButtonsComponent } from './joke-buttons.component';

describe('JokeButtonsComponent', () => {
  let component: JokeButtonsComponent;
  let fixture: ComponentFixture<JokeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
