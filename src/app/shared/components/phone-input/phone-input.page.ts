import { CountriesSelectPage } from './../countries-select/countries-select.page';
import { PopoverController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

export interface Country {
  id: number;
  name: string;
  code: string;
  image: string;
}

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.page.html',
  styleUrls: ['./phone-input.page.scss'],
})
export class PhoneInputPage implements OnInit, OnChanges {

  @Input() phone = '';
  @Output() phoneChange = new EventEmitter<string>();
  @Input() prefixId = 1;
  @Output() prefixIdChange = new EventEmitter<number>();
  @Output() phoneChanged = new EventEmitter();
  @Input() error = false;

  prefix: Country = null;

  countries: Country[] = [
    {
      id: 1,
      name: 'UAE',
      code: '+971',
      image: 'assets/imgs/flags/uae.png'
    },
    {
      id: 2,
      name: 'PAL',
      code: '+970',
      image: 'assets/imgs/flags/pal.png'
    }
  ];

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnChanges(): void {
  }

  ngOnInit() {
    this.prefix = this.countries.find(v => v.id === this.prefixId);
  }

  async openPrefixSelect() {
    const pop = await this.popoverCtrl.create({
      component: CountriesSelectPage,
      cssClass: 'countries-popover ion-no-scroll',
      componentProps: {
        items: this.countries,
        selectedItem: this.prefix || this.countries[0]
      }
    });
    pop.componentProps.pop = pop;
    pop.onDidDismiss().then(v => {
      if (v.role === 'success') {
        this.prefix = v.data;
        this.prefixId = this.prefix.id;
        this.triggerChanged();
      }
    });
    pop.present();
  }

  triggerChanged() {
    const prfx = this.countries.find(v => v.id === this.prefixId).code;
    this.phoneChanged.emit({
      phone: this.phone,
      prefix: prfx,
      full: prfx + this.phone
    });
    this.phoneChange.emit(this.phone);
    this.prefixIdChange.emit(this.prefixId);
  }

}
