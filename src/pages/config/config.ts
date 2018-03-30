import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  icons: string[];
  items: Array<{motor: string}>;
  
  //motorChosen: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //private storage: Storage     this.motorChosen=storage.get('motor');
    /* this.motor=; */

    /* this.items = [];
    this.items.push({
      motor:this.motorChosen
    }); */
  }

 /*  toMotors(){
    this.navCtrl.push(MotorsPage);
  } 
  toFrames(){
    this.navCtrl.push(FramesPage);
  }  */

}
