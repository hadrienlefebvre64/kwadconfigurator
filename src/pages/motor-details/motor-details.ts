import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-motor-details',
  templateUrl: 'motor-details.html'
})
export class MotorDetailsPage {
  selectedItem: any;
  //public local:Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  addMotor(brand, model){
    this.storage.ready().then(() => {
      this.storage.remove('motorBrand');
      this.storage.set('motorBrand', brand);
      this.storage.remove('motorModel');
      this.storage.set('motorModel', model);
      alert("Motor added to configuration")
    });
    
  }
}
