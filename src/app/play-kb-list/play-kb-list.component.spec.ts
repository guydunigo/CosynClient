import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayKbListComponent } from './play-kb-list.component';

describe('PlayKbListComponent', () => {
  let component: PlayKbListComponent;
  let fixture: ComponentFixture<PlayKbListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayKbListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayKbListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
