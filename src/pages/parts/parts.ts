import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { MotorsPage } from '../motors/motors';
import { FramesPage } from '../frames/frames';

@Component({
  selector: 'page-parts',
  templateUrl: 'parts.html'
})
export class PartsPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  toMotors(){
    this.navCtrl.push(MotorsPage);
  } 
  toFrames(){
    this.navCtrl.push(FramesPage);
  } 

}
