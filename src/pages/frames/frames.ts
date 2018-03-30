import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, NavParams, App, ActionSheetController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FrameDetailsPage } from '../frame-details/frame-details';

@Component({
  selector: 'page-frames',
  templateUrl: 'frames.html'
})
export class FramesPage implements OnInit{
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  frames: Observable<any[]>;

  constructor(public navCtrl: NavController, public actionSheetCtrl: ActionSheetController,public navParams: NavParams, public app: App, private afDatabase: AngularFireDatabase) {
    
  }

  ngOnInit() {
    this.frames = this.getFrames('/frames');
  }

  getFrames(listPath): Observable<any[]> {
    return this.afDatabase.list(listPath).valueChanges();
  }

  showOptions(event, frame) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do?',
      buttons: [
        {
          text: 'Show informations',
          handler: () => {
            //this.removeSong(songId);
            this.navCtrl.push(FrameDetailsPage, {
              item: frame
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
