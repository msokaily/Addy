/* eslint-disable eqeqeq */
import { IonInput, IonPopover, NavController, Platform } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-phone-otp',
  templateUrl: './phone-otp.page.html',
  styleUrls: ['./phone-otp.page.scss'],
})
export class PhoneOtpPage implements OnInit {

  @ViewChild('n1', { static: false }) n1: IonInput;
  @ViewChild('n2', { static: false }) n2: IonInput;
  @ViewChild('n3', { static: false }) n3: IonInput;
  @ViewChild('n4', { static: false }) n4: IonInput;
  @ViewChild('n5', { static: false }) n5: IonInput;

  pop: IonPopover;

  userinfo: any;

  code = [];

  counter = null;

  countDown = 30;

  constructor(
    private navCtrl: NavController,
    private plt: Platform
  ) { }

  ngOnInit() {
    this.counter = setInterval(() => {
      if (this.countDown > 0) {
        this.countDown--;
      }
    }, 1000);
  }

  ionViewDidEnter() {
    this.plt.ready().then(() => {
      this.n1.setFocus();
    });
  }

  ionViewDidLeave() {
    clearInterval(this.counter);
  }

  changePhone() {
    this.pop.dismiss(this.code.join(''), 'changeNumber');
  }

  resendOtp() {
  }

  bInput(e, iNumber) {
    if (e.code == 'Backspace') {
      const n = iNumber - 1;
      this.plt.ready().then(() => {
        if (n == 5 && this.n5.value == '') {
          this.n5.setFocus();
        }
        if (n == 4 && this.n5.value == '') {
          this.n4.setFocus();
        }
        if (n == 3 && this.n5.value == '') {
          this.n3.setFocus();
        }
        if (n == 2 && this.n5.value == '') {
          this.n2.setFocus();
        }
        if (n == 1 && this.n5.value == '') {
          this.n1.setFocus();
        }
      });
    }
  }

  nInput(e: CustomEvent | any, iNumber) {
    const inputEvent: InputEvent = e.detail;
    let val;
    val = inputEvent.data;

    const arabicNum = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
    const dicNum = { '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9', '٠': '0' };

    if (val.length == 5 )
    {
      this.n1.value = val[0];
      this.n1.setFocus();
      this.n2.value = val[1];
      this.n2.setFocus();
      this.n3.value = val[2];
      this.n3.setFocus();
      this.n4.value = val[3];
      this.n4.setFocus();
      this.n5.value = val[4];
      this.n5.setFocus();
    }
    else if (inputEvent.inputType == 'insertText') {
      if (dicNum[val] == null) {

      }
      else {
        val = (dicNum[val]);
      }
      const n = iNumber + 1;
      if (iNumber == 1) {this.n1.value = val;}
      if (iNumber == 2) {this.n2.value = val;}
      if (iNumber == 3) {this.n3.value = val;}
      if (iNumber == 4) {this.n4.value = val;}
      if (iNumber == 5) {this.n5.value = val;}
      this.plt.ready().then(() => {
        if (n == 1) {this.n1.setFocus();}
        if (n == 2) {this.n2.setFocus();}
        if (n == 3) {this.n3.setFocus();}
        if (n == 4) {this.n4.setFocus();}
        if (n == 5) {this.n5.setFocus();}
      });
    }
    if (this.n1.value && this.n2.value && this.n3.value && this.n4.value && this.n5.value) {
      this.submit();
    }
  }

  submit() {
    this.pop.dismiss(true, 'success');
  }

  close() {
    this.pop.dismiss(false, 'closed');
  }

}
