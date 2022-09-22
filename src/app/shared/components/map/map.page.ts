import { IonInput, Platform, NavController } from '@ionic/angular';
import { GoogleMap } from '@angular/google-maps';
import { Component, OnInit, ViewChild, ChangeDetectorRef, Input, Output, EventEmitter } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  @ViewChild(GoogleMap) map: GoogleMap;

  @Input() center?: google.maps.LatLng;
  @Input() zoom?: number;
  @Input() addressTxt?: string;
  @Output() centerChange = new EventEmitter<google.maps.LatLng>();
  @Output() addressTxtChange = new EventEmitter<string>();

  options!: google.maps.MapOptions;

  constructor(
    private plt: Platform,
    private shared: SharedService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.options = {
        center: new google.maps.LatLng({lat: 24.3892308, lng: 54.5339456}),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: false,
        zoomControlOptions: {
          position: google.maps.ControlPosition.RIGHT_BOTTOM
        },
        disableDefaultUI: true
      };
      const input = document.getElementById('searchBox') as HTMLInputElement;
      const searchBox = new google.maps.places.SearchBox(input);
      let markers = [];
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
          return;
        }
        markers = [];
        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log('Returned place contains no geometry');
            return;
          }
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        this.addressTxt = places[0].formatted_address;
        this.addressTxtChange.emit(this.addressTxt);
        this.map.fitBounds(bounds);
      });
      const icon = {
        url: 'assets/imgs/map-marker.png',//place.icon as string,
        size: new google.maps.Size(198, 198),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(60, 60),
        scaledSize: new google.maps.Size(120, 120),
      };
      // Create a marker for each place.
      const marker = new google.maps.Marker({
        map: this.map.googleMap,
        icon,
        title: 'My Location',
        position: this.map.getCenter(),
        animation: google.maps.Animation.DROP
      });
      markers.push(
        marker
      );
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
      this.map.boundsChanged.subscribe(() => {
        searchBox.setBounds(this.map.getBounds() as google.maps.LatLngBounds);
        marker.setPosition(this.map.getCenter());
        this.center = this.map.getCenter();
        this.centerChange.emit(this.center);
      });
      // --------------------
      const locationButton = document.createElement('button');
      locationButton.innerHTML = `<img src="assets/imgs/logo-thumbnail.png"
      width="26" height="26" style="margin-inline-end: 10px;"> Locate me`;
      locationButton.classList.add('custom-map-control-button');
      locationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              this.map.googleMap.setCenter(new google.maps.LatLng(pos));
            },
            () => {
              this.shared.toast({
                message: 'Error: The Geolocation service failed.',
                duration: 2500,
                color: 'danger',
                buttons: ['dismiss']
              });
            }
          );
        } else {
          // Browser doesn't support Geolocation
          this.shared.toast({
            message: 'Error: Your browser doesn\'t support geolocation.',
            duration: 2500,
            color: 'danger',
            buttons: ['dismiss']
          });
        }
      });
      this.map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(locationButton);
      // --------------------
      const backButton = document.createElement('button');
      backButton.innerHTML = `<img src="assets/imgs/back-btn-icon.png" width="15px" heigh="15px" />`;
      backButton.classList.add('custom-back-button-control');
      backButton.addEventListener('click', () => {
        this.navCtrl.back();
      });
      this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(backButton);
    });
  }

}

