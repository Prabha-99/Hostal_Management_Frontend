// chang-room.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { Student } from '../student';

@Component({
  selector: 'app-chang-room',
  templateUrl: './chang-room.component.html',
  styleUrls: ['./chang-room.component.css']
})
export class ChangRoomComponent implements OnInit {
  studentsData: Student[] = [];
  selectedUserId: number | null = null;
  newRoomNumber: string = '';

  constructor(private studentService: StudentService ) {}

  ngOnInit(): void {
    this.loadStudentsData();
  }

  loadStudentsData() {
    this.studentService.getAllStudentsRegistrationAndRoom().subscribe(
      (data: any[]) => {
        this.studentsData = data.map(item => ({
          reg_no: item[0],
          room: item[1],
          id: item[2]
        }));
      },
      (error) => {
        console.error('Error loading students data:', error);
      }
    );
  }

  openUpdateModal(userId: number, currentRoom: string) {
    this.selectedUserId = userId;
    this.newRoomNumber = currentRoom;
    // Add code to open your modal here
  }

  updateRoom() {
    console.log('Updating room...');
    if (this.selectedUserId !== null && this.newRoomNumber !== '') {
      console.log('Sending data:', { userId: this.selectedUserId, newRoomNumber: this.newRoomNumber });
      this.studentService.updateRoom(this.selectedUserId, this.newRoomNumber).subscribe(
        () => {
          console.log('Room updated successfully');
          // Add code to close your modal here
          this.closeUpdateModal();
          // Refresh the students' data after update
          this.loadStudentsData();
          // Add code to navigate to the previous page or handle redirection
        },
        (error) => {
          console.error('Error updating room:', error);
        }
      );
    } else {
      console.error('Invalid data for room update');
    }
  }
  
  closeUpdateModal() {
    // Add code to close your modal here
    this.selectedUserId = null;
    this.newRoomNumber = '';
  }
  
  
  
}
