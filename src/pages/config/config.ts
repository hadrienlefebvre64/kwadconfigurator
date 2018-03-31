import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  icons: string[];
  items: Array<{motor: string}>;
  
  //public local:Storage;

  selectedMotorBrand: null;
  selectedMotorModel: null;
  selectedFrameBrand: null;
  selectedFrameModel: null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private emailComposer: EmailComposer) {

  }

deleteMotor(){
  this.storage.remove('motorBrand');
  this.storage.remove('motorModel');
  //ionViewWillEnter();
}

deleteFrame(){
  this.storage.remove('frameBrand');
  this.storage.remove('frameModel');
  //ionViewWillEnter();
}

ionViewWillEnter() { // THERE IT IS!!!
  this.storage.ready().then(() => {

    // get value 
    //Motors
    this.storage.get('motorBrand').then((val) => {
      this.selectedMotorBrand = val;
    })
    this.storage.get('motorModel').then((val) => {
      this.selectedMotorModel = val;
    })

    //Frames
    this.storage.get('frameBrand').then((val) => {
      this.selectedFrameBrand = val;
    })
    this.storage.get('frameModel').then((val) => {
      this.selectedFrameModel = val;
    })
});
}

  /* this.emailComposer.isAvailable().then((available: boolean) =>{
    if(available) {
      //Now we know we can send
    }
   }); */
   sendMail(){
    let email = {
      to: 'hadrien.lefebvre@hotmail.fr',
      cc: '',
      bcc: [''],
      attachments: [
        
      ],
      subject: 'Here is your list from Kwad Configurator',
      body: 'Oh yeah that is a pretty neet config dude !',
      isHtml: true
    };
    this.emailComposer.open(email);
  }
   // Send a text message using default options
   //

}
