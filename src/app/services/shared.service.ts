import { Injectable } from '@angular/core';
import { AlertController, AlertOptions, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public lang = 'en';
  public currency = 'AED';

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  public async alert(alertOptions: AlertOptions = {header: 'Alert', message: ''}) {
    const alert = await this.alertCtrl.create(alertOptions);
    alert.present();
    return alert;
  }

  public async toast(toastOptions: ToastOptions = {message: '', duration: 2000}) {
    const toast = await this.toastCtrl.create(toastOptions);
    toast.present();
    return toast;
  }

}
