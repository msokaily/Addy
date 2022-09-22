import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonPopover } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  pop: IonPopover;

  data: any;
  isUpdate = false;

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.form.patchValue(this.data);
      this.isUpdate = true;
    }
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    this.pop.dismiss(this.form.value, 'success');
  }

  close() {
    this.pop.dismiss(false, 'closed');
  }

}
