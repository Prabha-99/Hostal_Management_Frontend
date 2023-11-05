import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMatesComponent } from './room-mates.component';

describe('RoomMatesComponent', () => {
  let component: RoomMatesComponent;
  let fixture: ComponentFixture<RoomMatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomMatesComponent]
    });
    fixture = TestBed.createComponent(RoomMatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
