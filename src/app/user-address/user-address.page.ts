import { AddressPage } from './address/address.page';
import { ActivatedRoute } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

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
      user: {
        firstName: 'Mohammed',
        lastName: 'Okaily',
        email: 'msokaily92@gmail.com'
      },
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
      user: {
        firstName: 'Mohammed',
        lastName: 'Samir Okaily',
        email: 'gothum0@gmail.com'
      },
      address: 'Floor 7 Building 05 street city, Dubai',
      location: {
        lat: 24.312512,
        lng: 32.231155
      },
      selected: false
    }
  ];

  selectedAddress = null;

  cartInfo: any;

  constructor(
    private shared: SharedService,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((v: any) => {
      if (v?.cartInfo) {
        this.cartInfo = JSON.parse(v.cartInfo);
      }
    });
  }

  async addAddress() {
    const pop = await this.openAddressPop();
    pop.onDidDismiss().then(v => {
      console.log('Address Result Added: ', v);
      if (v.role === 'success') {
        this.navCtrl.navigateForward(['location'], {
          relativeTo: this.route
        });
      }
    });
  }

  async editAddress(item) {
    const pop = await this.openAddressPop(item?.user);
    pop.onDidDismiss().then(v => {
      console.log('Address Result Edit: ', v);
      if (v.role === 'success') {
        this.navCtrl.navigateForward(['location'], {
          relativeTo: this.route
        });
      }
    });
  }

  async openAddressPop(address?) {
    const pop = await this.popoverCtrl.create({
      component: AddressPage,
      cssClass: 'address-popover',
      backdropDismiss: false,
      componentProps: {
        data: address || undefined
      }
    });
    pop.componentProps.pop = pop;
    pop.present();
    return pop;
  }

  checkout() {
    if (this.items.length === 1) {
      this.selectAddress(this.items[0]);
    }
    if (!this.selectedAddress) {
      this.shared.toast({
        message: 'Please select address!',
        position: 'top',
        duration: 2000,
        color: 'warning',
        buttons: ['hide']
      });
      return;
    }
    const data = {
      cartInfo: this.cartInfo,
      address: this.items.find(v => v.id === this.selectedAddress)
    };
    this.navCtrl.navigateForward('choose-time', {
      queryParams: {
        order: JSON.stringify(data)
      }
    });
  }

  selectAddress(item: any) {
    this.selectedAddress = item.id;
  }

}
