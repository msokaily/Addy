import { PhoneOtpPage } from './../../shared/components/phone-otp/phone-otp.page';
import { PopoverController, NavController } from '@ionic/angular';
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministore-cart',
  templateUrl: './ministore-cart.page.html',
  styleUrls: ['./ministore-cart.page.scss'],
  host: {class: 'ministore-page'}
})
export class MinistoreCartPage implements OnInit {

  items = [
    {
      id: 1,
      name: 'Readymade Navy Blue Crape Readymade Navy Blue Crape',
      image: 'assets/temp/products/1.png',
      images: [
        'assets/temp/products/1.png',
        'assets/temp/products/2.png',
        'assets/temp/products/3.png'
      ],
      price: 100,
      quantity: 1,
      options: [
        {
          id: 1,
          name: 'Size',
          value: 'Medium'
        },
        {
          id: 2,
          name: 'Color',
          value: 'Red'
        }
      ],
      description: `The creative toys handcrafted of wood are endless! But special ones are those which remind us of our childhood
      memories and leave a positive impact on us totally like this wooden cow toy.`
    },
    {
      id: 2,
      name: 'Readymade Navy Blue Crape ...',
      image: 'assets/temp/products/2.png',
      images: [
        'assets/temp/products/2.png',
        'assets/temp/products/3.png',
        'assets/temp/products/1.png'
      ],
      price: 70,
      quantity: 3,
      options: [
        {
          id: 1,
          name: 'Size',
          value: 'Large'
        }
      ],
      description: `The creative toys handcrafted of wood are endless! But special ones are those which remind us of our childhood
      memories and leave a positive impact on us totally like this wooden cow toy.`
    }
  ];

  deliveryFee = 50;
  paymentMode = 'cash';
  instructions = null;

  userInfo = {
    phone: '',
    prefixId: 1,
    full : ''
  };

  error = false;

  constructor(
    private popoverCtrl: PopoverController,
    private navCtrl: NavController
  ) { }

  get total() {
    return this.items.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0);
  }
  get totalGrand() {
    return this.total + this.deliveryFee;
  }

  ngOnInit() {
  }

  removeItem(e) {
    this.items.splice(e.index, 1);
  }

  paymentChanged(e) {
    setTimeout(() => {
      this.paymentMode = 'cash';
    }, 50);
  }
  instructionsChanged(e) {
  }

  phoneChanged(e) {
    this.userInfo = e;
  }

  async login() {
    this.error = false;
    if (!this.userInfo.phone || this.userInfo.phone.length < 6) {
      this.error = true;
      return;
    }
    const pop = await this.popoverCtrl.create({
      component: PhoneOtpPage,
      cssClass: 'otp-popover',
      componentProps: {
        userinfo: this.userInfo
      }
    });
    pop.componentProps.pop = pop;
    pop.onDidDismiss().then(v => {
      if (v.role === 'success') {
        const data = {
          userinfo: this.userInfo,
          items: this.items,
          paymendMode: this.paymentMode,
          instructions: this.instructions,
          total: this.total
        };
        this.navCtrl.navigateRoot('user-address', {
          queryParams: {
            cartInfo: JSON.stringify(data)
          }
        });
      }
    });
    pop.present();
  }

}
