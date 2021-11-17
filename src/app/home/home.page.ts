import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalLocationsComponent } from '../components/modals/modal-locations/modal-locations.component';

declare const google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;

  private latLng: any;

  private marker: any;

  private map: any;

  private geocoder = new google.maps.Geocoder();

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.initMap();
  }

  public async locations() {

    const modal = await this.modalCtrl.create({
      component: ModalLocationsComponent,
      backdropDismiss: false
    });

    return await modal.present();

  }

  private geocodeLatLng(latLng: any) {

    this.geocoder.geocode({ location: latLng }, (results: any) => {

      results[0].address_components.forEach((component: any) => {
        if (component.types.indexOf('street_number') != -1) {

        }
        else if (component.types.indexOf('route') != -1) {

        }
        else if (component.types.indexOf('sublocality_level_1') != -1) {

        }
        else if (component.types.indexOf('administrative_area_level_2') != -1) {

        }
        else if (component.types.indexOf('administrative_area_level_1') != -1) {

        }
        else if (component.types.indexOf('postal_code') != -1) {

        }
      });

    });

  }

  private async initMap() {

    this.latLng = { lat: -16.70442149492856, lng: -49.28338839291844 }

    const mapOptions = {
      center: this.latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      zoomControl: false,
      streetViewControl: false,
      fullscreenControl: false,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [
            { visibility: 'off' }
          ]
        }
      ]
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.marker = new google.maps.Marker({
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: this.latLng
    });

    this.geocodeLatLng(this.latLng);

    this.marker.addListener('dragend', (data: any) => {

      this.latLng = new google.maps.LatLng(data.latLng.lat(), data.latLng.lng());

      this.map.setCenter(this.latLng);

      this.geocodeLatLng(this.latLng);

    });

  }


}
