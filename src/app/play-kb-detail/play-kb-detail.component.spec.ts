import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayKbDetailComponent } from './play-kb-detail.component';

describe('PlayKbDetailComponent', () => {
  let component: PlayKbDetailComponent;
  let fixture: ComponentFixture<PlayKbDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayKbDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayKbDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
