import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  active = 1; // Set the default active tab to 1

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.active = 1; // Set the active tab to 1 when opening the Offcanvas
    this.modalService.open(content, { ariaLabelledBy: 'offcanvas-basic-title'});
  }
}
