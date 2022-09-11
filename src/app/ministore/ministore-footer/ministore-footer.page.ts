import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-ministore-footer',
  templateUrl: './ministore-footer.page.html',
  styleUrls: ['./ministore-footer.page.scss'],
})
export class MinistoreFooterPage implements OnInit {

  constructor(
    private shared: SharedService
  ) { }

  ngOnInit() {
  }

  showDetail(){
    this.shared.alert({
      cssClass: 'shop-info-alert',
      message: `<div>
        <div class="info-div">
          <div>VAT No.</div>
          <div>12345 1234 12345 123156</div>
        </div>
        <div class="info-div">
          <div>Commercial Register No.</div>
          <div>12345 12345 1234</div>
        </div>
      </div>`
    });
  }

}
