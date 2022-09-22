import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MiniStoreItem } from '../ministore-list-item/ministore-list-item.page';

@Component({
  selector: 'app-ministore-list',
  templateUrl: './ministore-list.page.html',
  styleUrls: ['./ministore-list.page.scss'],
})
export class MinistoreListPage implements OnInit {
  items: Array<MiniStoreItem> = [
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
      description: `The creative toys handcrafted of wood are endless! But special ones are those which remind us of our childhood
      memories and leave a positive impact on us totally like this wooden cow toy.`
    },
    {
      id: 3,
      name: 'Blue cow with wheel ...',
      image: 'assets/temp/products/3.png',
      images: [
        'assets/temp/products/3.png',
        'assets/temp/products/2.png',
        'assets/temp/products/1.png'
      ],
      price: 45
    },
    {
      id: 4,
      name: 'Readymade Navy Blue Crape ...',
      image: 'assets/temp/products/4.png',
      price: 65
    },
    {
      id: 5,
      name: 'Readymade Navy Pig ...',
      image: 'assets/temp/products/5.png',
      price: 90
    },
    {
      id: 6,
      name: 'Readymade Navy Shoe ...',
      image: 'assets/temp/products/6.png',
      price: 75
    },
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  viewProduct(product) {
    this.navCtrl.navigateForward(['ministore', 'product'], {
      queryParams: {
        item: JSON.stringify(product)
      }
    });
  }

}
