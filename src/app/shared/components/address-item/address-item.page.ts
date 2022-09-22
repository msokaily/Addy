import { NavController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.page.html',
  styleUrls: ['./address-item.page.scss'],
})
export class AddressItemPage implements OnInit {

  @Input() item;
  @Input() selected;
  @Input() editable = true;
  @Output() clicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  selectAddress() {
    this.clicked.emit(this.item);
  }

  editAddress(event?) {
    this.editClicked.emit(this.item);
    event.stopPropagation();
  }

}
