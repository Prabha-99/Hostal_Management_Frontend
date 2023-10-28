import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangRoomComponent } from './chang-room.component';

describe('ChangRoomComponent', () => {
  let component: ChangRoomComponent;
  let fixture: ComponentFixture<ChangRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangRoomComponent]
    });
    fixture = TestBed.createComponent(ChangRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
