import { MinistoreFilterPage } from './../ministore-filter/ministore-filter.page';
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-ministore',
  templateUrl: './ministore.page.html',
  styleUrls: ['./ministore.page.scss'],
})
export class MinistorePage implements OnInit {

  constructor(
    private popoverCtrl: PopoverController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async openFilter() {
    const pop = await this.popoverCtrl.create({
      component: MinistoreFilterPage,
      cssClass: 'filter-popover',
      componentProps: {}
    });
    pop.componentProps.pop = pop;
    pop.present();
  }
  checkout() {
    this.navCtrl.navigateForward(['ministore', 'cart']);
  }

}
