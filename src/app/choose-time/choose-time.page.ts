import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, ChangeDetectorRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
/* eslint-disable @angular-eslint/no-host-metadata-property */
import { Component, OnInit } from '@angular/core';
import { IonCheckbox, NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-choose-time',
  templateUrl: './choose-time.page.html',
  styleUrls: ['./choose-time.page.scss'],
  host: {class: 'ministore-page'}
})
export class ChooseTimePage implements OnInit {

  @ViewChild('asapCheckbox') asapCheckbox: IonCheckbox;
  @ViewChild('scheduleCheckbox') scheduleCheckbox: IonCheckbox;

  days = [];
  dayIndex = 0;

  form = {
    fromTime: '',
    toTime: '',
    day: '',
    deliveryType: 2
  };

  order: any;


  constructor(
    private changeDetector: ChangeDetectorRef,
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((v: any) => {
      if (v?.order) {
        this.order = JSON.parse(v.order);
      }
    });
    this.refresh();
  }

  submit() {
    this.order.deliveryInfo = this.form;
    this.navCtrl.navigateForward(['ministore', 'review-order'], {
      queryParams: {
        order: JSON.stringify(this.order)
      }
    });
  }

  refresh() {
    const days = [];
    const dateMoment = moment();
    for (let i = 0; i < 30; i++) {
      days.push({
        day: dateMoment.get('date'),
        dayName: dateMoment.format('dddd'),
        date: dateMoment.format('MMM DD, YYYY')
      });
      dateMoment.add(1, 'day');
    }
    this.days = days;
    this.selectDay(0);
  }

  selectDay(index) {
    this.dayIndex = index;
    this.form.day = this.days[index];
  }

  dayChanged(e) {
    this.form.day = this.days[e.detail.value];
  }
  timeFromChanged(e) {
    this.form.fromTime = e;
    this.changeDetector.detectChanges();
  }
  timeToChanged(e) {
    this.form.toTime = e;
    this.changeDetector.detectChanges();
  }

  deliveryTypeChanged(e) {
    if (e.detail.checked) {
      this.form.deliveryType = e.detail.value;
    }else {
        if (this.form.deliveryType === 1) {
          this.asapCheckbox.checked = true;
        }else {
          this.scheduleCheckbox.checked = true;
        }
    }
  }
}
