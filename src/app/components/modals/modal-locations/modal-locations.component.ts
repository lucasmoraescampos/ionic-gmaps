import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-locations',
  templateUrl: './modal-locations.component.html',
  styleUrls: ['./modal-locations.component.scss'],
})
export class ModalLocationsComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  public dismiss() {
    this.modalCtrl.dismiss();
  }

}
