import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ministore-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  @Input() title = '';
  constructor() { }

  ngOnInit() {
  }

  changeLang(lang) {
  }

  openWhatsApp() {
  }
  openInstagram() {
  }

}
