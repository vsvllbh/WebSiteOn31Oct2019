import {Component} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  title = 'My first AGM project';
  lat = 19.304023;
  lng = 84.778883;
  zoom: 10;
  private urls: string;

  goToLink() {
    this.urls = 'https://www.google.com/maps/dir//Saraswati+sishu+Vidya+Mandir,' +
      '+Neelakantha+Nagar+%E0%AC%B8%E0%AC%B0%E0%AC%B8%E0%AD%8D%E0%AD%B1%E0%AC%A4%E0%AD%80' +
      '+%E0%AC%B6%E0%AC%BF%E0%AC%B6%E0%AD%81+' +
      '%E0%AC%AC%E0%AC%BF%E0%AC%A6%E0%AD%8D%E0%AD%9F%E0%AC%BE%E0%AC%AE%E0%AC%A8%E0%AD%8D%E0%AC%A6%E0%AC%BF%E0%AC%B0,' +
      '+%E0%AC%A8%E0%AD%80%E0%AC%B3%E0%AC%95%E0%AC%A3%E0%AD%8D%E0%AC%A0+%E0%AC%A8%E0%AC%97%E0%AC%B0,' +
      '+Housingboard,+Brahmapur,+Odisha/@19.303558,84.7831629,15.25z/' +
      'data=!4m9!4m8!1m0!1m5!1m1!1s0x3a3d50078cea817d:0xf8e99c82e1c7ba58!2m2!1d84.7819991!2d19.3047014!3e0?hl=en-US';
    window.open(this.urls, '_blank');
  }
}
