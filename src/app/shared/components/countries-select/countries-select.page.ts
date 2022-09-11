import { IonPopover } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Country } from '../phone-input/phone-input.page';

@Component({
  selector: 'app-countries-select',
  templateUrl: './countries-select.page.html',
  styleUrls: ['./countries-select.page.scss'],
})
export class CountriesSelectPage implements OnInit {

  pop: IonPopover;

  items = [];

  selectedItem: Country = null;

  search = '';

  constructor() { }

  ngOnInit() {
  }

  selectCountry(item) {
    this.selectedItem = item;
    this.pop.dismiss(this.selectedItem, 'success');
  }

}
