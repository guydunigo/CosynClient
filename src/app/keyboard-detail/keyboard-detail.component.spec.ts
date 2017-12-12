import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardDetailComponent } from './keyboard-detail.component';

describe('KeyboardDetailComponent', () => {
  let component: KeyboardDetailComponent;
  let fixture: ComponentFixture<KeyboardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
