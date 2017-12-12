import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardsListComponent } from './keyboards-list.component';

describe('KeyboardsListComponent', () => {
  let component: KeyboardsListComponent;
  let fixture: ComponentFixture<KeyboardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
