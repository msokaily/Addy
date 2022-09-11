import { Injectable } from '@angular/core';
import { AlertController, AlertOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public lang = 'en';
  public currency = 'AED';

  constructor(
    private alertCtrl: AlertController
  ) { }

  public async alert(alertOptions: AlertOptions = {header: 'Alert', message: ''}) {
    const alert = await this.alertCtrl.create(alertOptions);
    alert.present();
    return alert;
  }

}
