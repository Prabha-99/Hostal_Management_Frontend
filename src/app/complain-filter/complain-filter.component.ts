import { Component } from '@angular/core';
import { ComplainService } from '../complain/complain.service';

@Component({
  selector: 'app-complain-filter',
  templateUrl: './complain-filter.component.html',
  styleUrls: ['./complain-filter.component.css']
})
export class ComplainFilterComponent {
  accepted: any[] = [];
  nulls: any[] = [];
  currentPageAccepted = 1;
  totalPagesAccepted = 1;
  pagesAccepted: number[] = [];
  startIndexAccepted = 0;
  currentPageNull = 1;
  totalPagesNull = 1;
  pagesNull: number[] = [];
  startIndexNull = 0;
  itemsPerPage = 5;

  constructor(private dataService: ComplainService) { }

  ngOnInit() {
    this.getAcceptedInfo();
    this.getNullInfo();
  }

  getAcceptedInfo() {
    this.dataService.getAcceptedInfo().subscribe(
      (response: any) => {
        this.accepted = response;
        this.totalPagesAccepted = Math.ceil(this.accepted.length / this.itemsPerPage);
        this.pagesAccepted = Array.from({ length: this.totalPagesAccepted }, (_, i) => i + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getNullInfo() {
    this.dataService.getNullInfo().subscribe(
      (response: any) => {
        this.nulls = response;
        this.totalPagesNull = Math.ceil(this.nulls.length / this.itemsPerPage);
        this.pagesNull = Array.from({ length: this.totalPagesNull }, (_, i) => i + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToPageAccepted(page: number) {
    this.currentPageAccepted = page;
    this.startIndexAccepted = (this.currentPageAccepted - 1) * this.itemsPerPage;
  }

  previousPageAccepted() {
    if (this.currentPageAccepted > 1) {
      this.currentPageAccepted--;
      this.startIndexAccepted -= this.itemsPerPage;
    }
  }

  nextPageAccepted() {
    if (this.currentPageAccepted < this.totalPagesAccepted) {
      this.currentPageAccepted++;
      this.startIndexAccepted += this.itemsPerPage;
    }
  }

  goToPageNull(page: number) {
    this.currentPageNull = page;
    this.startIndexNull = (this.currentPageNull - 1) * this.itemsPerPage;
  }

  previousPageNull() {
    if (this.currentPageNull > 1) {
      this.currentPageNull--;
      this.startIndexNull -= this.itemsPerPage;
    }
  }

  nextPageNull() {
    if (this.currentPageNull < this.totalPagesNull) {
      this.currentPageNull++;
      this.startIndexNull += this.itemsPerPage;
    }
  }
}
