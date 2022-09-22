import { SwiperComponent } from 'swiper/angular';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ChangeDetectorRef } from '@angular/core';
import * as moment from 'moment';
import { SwiperOptions } from 'swiper';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-time-select',
  templateUrl: './time-select.page.html',
  styleUrls: ['./time-select.page.scss']
})
export class TimeSelectPage implements OnInit, OnChanges {

  @Input() time: string;
  @Output() timeChange = new EventEmitter<string>();
  @Input() day: any = null;

  @ViewChild('swiper', {static: true}) swiper: SwiperComponent;

  times = [];

  swiperOptions: SwiperOptions = {
    autoplay: false,
    direction: 'vertical',
    slidesPerView: 'auto',
    centeredSlides: true,
    slideToClickedSlide: true,
    spaceBetween: 10
  };

  constructor(
    private changeDetector: ChangeDetectorRef,
    private plt: Platform
  ) {}

  ngOnInit() {
    this.refresh();
  }

  ngOnChanges() {
    this.refresh();
  }

  refresh() {
    const times = [];
    const timeMoment = moment();
    if (this.day.date !== timeMoment.format('MMM DD, YYYY')) {
      timeMoment.set('hours', 1);
      timeMoment.set('minutes', 0);
    }
    const tempMinutes = timeMoment.get('minute');
    if (tempMinutes < 30) {
      timeMoment.set('minute', 30);
    }else {
      timeMoment.add(1, 'hour');
      timeMoment.set('minute', 0);
    }
    while(timeMoment.get('h') <= 23 && timeMoment.get('h') >= 1) {
      times.push(timeMoment.format('hh:mm a'));
      timeMoment.add(1, 'hour');
    }
    this.times = times;
    this.changed();
    this.changeDetector.detectChanges();
  }

  onSwiper(e: any) {
    this.selectTime(this.time);
  }

  selectTime(time) {
    this.plt.ready().then(() => {
      const index = this.times.findIndex(v => v === time);
      this.swiper.swiperRef.slideTo(index || 0);
    });
  }

  changed(e?) {
    this.plt.ready().then(() => {
      this.time = this.times[this.swiper.swiperRef.activeIndex];
      this.timeChange.emit(this.time);
    });
  }

}
