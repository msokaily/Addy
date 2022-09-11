import { Component, Input, OnInit } from '@angular/core';

export interface MiniStoreItem {
  id: number;
  name: string;
  image: string;
  images?: string[];
  price: number;
  description?: string;
}

@Component({
  selector: 'app-ministore-list-item',
  templateUrl: './ministore-list-item.page.html',
  styleUrls: ['./ministore-list-item.page.scss'],
})
export class MinistoreListItemPage implements OnInit {

  @Input() data: MiniStoreItem;

  constructor() { }

  ngOnInit() {
  }

}
