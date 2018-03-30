import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-frame-details',
  templateUrl: 'frame-details.html'
})
export class FrameDetailsPage {
  selectedItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
}
