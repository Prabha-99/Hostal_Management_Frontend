import { Component, OnInit } from '@angular/core';
import { RoomService } from '../Service/room.service';
import { Room } from '../room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Room[] = [];
  newRoom: Room = { room_no: 0, no_of_items: 0, no_of_students: 0 };

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms() {
    this.roomService.getAllRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

  addRoom() {
    this.roomService.addRoom(this.newRoom).subscribe(() => {
      this.loadRooms();
      this.newRoom = { room_no: 0, no_of_items: 0, no_of_students: 0 };
    });
  }
}