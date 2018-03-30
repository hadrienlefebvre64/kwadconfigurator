import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PartsPage } from '../pages/parts/parts';
import { MotorsPage } from '../pages/motors/motors';
import { FramesPage } from '../pages/frames/frames';
import { MotorDetailsPage } from '../pages/motor-details/motor-details';
import { FrameDetailsPage } from '../pages/frame-details/frame-details';
import { ConfigPage } from '../pages/config/config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
 
// AF2 Settings
export const firebaseConfig = {
    apiKey: "AIzaSyAoLC1yTG30VgELR7tWyYLV7_xlf8xMF_w",
    authDomain: "kwadconfigurator.firebaseapp.com",
    databaseURL: "https://kwadconfigurator.firebaseio.com",
    projectId: "kwadconfigurator",
    storageBucket: "kwadconfigurator.appspot.com",
    messagingSenderId: "193638035206"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PartsPage,
    MotorsPage,
    FramesPage,
    MotorDetailsPage,
    FrameDetailsPage,
    ConfigPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PartsPage,
    MotorsPage,
    FramesPage,
    MotorDetailsPage,
    FrameDetailsPage,
    ConfigPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
