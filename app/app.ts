import { Component } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TabsPage } from './pages/tabs/tabs';
import { LoginPage } from './pages/login/login';
import * as firebase from 'firebase';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  public rootPage: any;

  constructor(private platform: Platform) {
 
  	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBoVDGO7MZvYabTVdWt1V6M_gDoTDt3IX8",
    authDomain: "fireblogger-222fe.firebaseapp.com",
    databaseURL: "https://fireblogger-222fe.firebaseio.com",
    storageBucket: "fireblogger-222fe.appspot.com",
    messagingSenderId: "647078807313"
  };
  firebase.initializeApp(config);
  	
  	//check logged in status
  /*
  This was causing blank pages so I commented it out and changed it to the one below it.
  firebase.auth().onAuthStateChanged((user) => {
		
		if(user){
			this.rootPage = TabsPage;
		}else {
			//this.rootPage = LoginPage;
			this.rootPage = LoginPage;
		}
		
	}); */

  var user = firebase.auth().currentUser; //this is what to change

        if (user) {
            // User is signed in. Redirect to Tabs Page
            this.rootPage = TabsPage;
        } else {
            // No user is signed in.
            this.rootPage = LoginPage;
        }
  	
    

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
