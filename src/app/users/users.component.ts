import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  students: any[] = [];
  staffs: any[] = [];
  currentPage = 1;
  totalPages = 1;
  pages: number[] = [];

  constructor(private dataService: StudentService) { }

  ngOnInit() {
    this.getStudentInfo();
    this.getStaffInfo();
  }

  getStudentInfo() {
    this.dataService.getStudentInfo().subscribe(
      (response: any) => {
        this.students = response;
        this.totalPages = Math.ceil(this.students.length / 5);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getStaffInfo() {
    this.dataService.getStaffInfo().subscribe(
      (response: any) => {
        this.staffs = response;
        this.totalPages = Math.ceil(this.staffs.length / 5);
        this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }


  goToPage(page: number) {
    this.currentPage = page;
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
