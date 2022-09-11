import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.page.html',
  styleUrls: ['./user-address.page.scss'],
})
export class UserAddressPage implements OnInit {

  items = [
    {
      id: 1,
      name: 'Home',
      address: 'Floor 10 Building 212 street city, Dubai',
      location: {
        lat: 24.312512,
        lng: 32.231155
      },
      selected: false
    },
    {
      id: 2,
      name: 'Work',
      address: 'Floor 7 Building 05 street city, Dubai',
      location: {
        lat: 24.312512,
        lng: 32.231155
      },
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addAddress() {
  }

  checkout() {
  }

  selectAddress(item: any) {
    item.selected = true;
  }

  editAddress(item) {
  }

}
