import { Component, OnInit } from '@angular/core';

import { NavController, NavParams, App, ActionSheetController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { MotorDetailsPage } from '../motor-details/motor-details';

@Component({
  selector: 'page-motors',
  templateUrl: 'motors.html'
})
export class MotorsPage implements OnInit{
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  motors: Observable<any[]>;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController,public navParams: NavParams, public app: App, private afDatabase: AngularFireDatabase) {
    
  }

  ngOnInit() {
    this.motors = this.getMotors('/motors');
  }

  getMotors(listPath): Observable<any[]> {
    return this.afDatabase.list(listPath).valueChanges();
  }

  itemTapped(event, motor) {
    this.navCtrl.push(MotorDetailsPage, {
      item: motor
    });
  }

  //TODO : voir infos;ajouter a la conf;annuler
  showOptions(event, motor) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Show informations',
          handler: () => {
            //this.removeSong(songId);
            this.navCtrl.push(MotorDetailsPage, {
              item: motor
            });
          }
        },{
          text: 'Add to configuration',
          handler: () => {
            //this.updateSong(songId, songTitle, songArtist);
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  
}
