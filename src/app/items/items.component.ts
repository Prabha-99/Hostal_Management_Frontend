import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../Service/items.service';
import { Items } from '../items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Items[] = [];
  newItem: Items = {
    propID: "",
    name: "",
    status: "",
    room_no: 0
  };
  p: number = 1; // Current page number
  itemsPerPage: number = 10; // Number of items to display per page

  constructor(private itemsService: ItemsService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  addItem() {
    this.itemsService.additem(this.newItem).subscribe(() => {
      this.loadItems();
      this.newItem = {
        propID: "",
        name: "",
        status: "",
        room_no: 0
      };
    });
  }

  loadItems() {
    this.itemsService.getAllItems().subscribe((data) => {
      this.items = data;
    });
  }
}
