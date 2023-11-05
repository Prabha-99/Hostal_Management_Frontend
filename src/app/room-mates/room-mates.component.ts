import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { User } from '../user';

@Component({
  selector: 'app-room-mates',
  templateUrl: './room-mates.component.html',
  styleUrls: ['./room-mates.component.css']
})
export class RoomMatesComponent implements OnInit {
  users: User[] = [];
  inputRoom: string = '';

  constructor(private userService: StudentService) { }

  ngOnInit(): void {
  }

  getUsersByRoom(): void {
    this.userService.getUsersByRoom(this.inputRoom)
      .subscribe(users => this.users = users);
  }
}
