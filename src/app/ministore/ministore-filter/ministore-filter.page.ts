import { SharedService } from './../../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-ministore-filter',
  templateUrl: './ministore-filter.page.html',
  styleUrls: ['./ministore-filter.page.scss'],
})
export class MinistoreFilterPage implements OnInit {

  public pop: IonPopover;

  sortByItems = [
    {
      id: 1,
      name: 'Price: Low to High'
    },
    {
      id: 2,
      name: 'Price: Hight to Low'
    },
    {
      id: 3,
      name: 'Review: Hight to Low'
    }
  ];

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit() {
  }

  onSearchChange(e) {
  }

  sizeChanged(e) {
  }

  colorChanged(e) {
  }

  priceChange(e) {
  }

  pinFormatter(value: number) {
    return 'AED ' + value;
  }

  submit() {
    this.pop.dismiss();
  }

}
