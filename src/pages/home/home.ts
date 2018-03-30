import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PartsPage } from '../parts/parts';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    //this.navCtrl.push(TabsPage);
  }

  toParts(){
    this.navCtrl.push(PartsPage);
    this.navCtrl.parent.select(1);
  } 

}
