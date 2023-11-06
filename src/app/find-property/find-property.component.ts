import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../Service/items.service';
import { Property } from '../property';

@Component({
  selector: 'app-find-property',
  templateUrl: './find-property.component.html',
  styleUrls: ['./find-property.component.css']
})
export class FindPropertyComponent implements OnInit{
  property : Property[] = [];
  inputRoom : Number = 0 ;

  constructor (private itemService : ItemsService){}


  ngOnInit(): void {
  }

  getRoomProperty(): void {
    this.itemService.getRoomsProperty(this.inputRoom)
    .subscribe(propertys => this.property = propertys)
  }

}
