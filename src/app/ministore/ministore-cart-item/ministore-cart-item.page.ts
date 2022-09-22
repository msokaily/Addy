import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ministore-cart-item',
  templateUrl: './ministore-cart-item.page.html',
  styleUrls: ['./ministore-cart-item.page.scss'],
})
export class MinistoreCartItemPage implements OnInit {

  @Input() item: any;
  @Input() index: any;
  @Input() preview = false;
  @Output() removeItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  viewOptions(options: []) {
    return options.map((v: any) => `${v.name}: ${v.value}`).join(' | ');
  }

  increaseQuantity(item) {
    item.quantity++;
  }
  decreaseQuantity(item) {
    if (item.quantity === 1) { return; }
    item.quantity--;
  }

  removeItemClicked() {
    this.removeItem.emit({
      item: this.item,
      index: this.index
    });
  }

}
