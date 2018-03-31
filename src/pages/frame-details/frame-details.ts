import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-frame-details',
  templateUrl: 'frame-details.html'
})
export class FrameDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  addFrame(brand, model){
    this.storage.ready().then(() => {
      this.storage.remove('frameBrand');
      this.storage.set('frameBrand', brand);
      this.storage.remove('frameModel');
      this.storage.set('frameModel', model);
      alert("Frame added to configuration")
    });
  }

}
