import firebase from 'firebase';
import MobxFirebaseStore from 'mobx-firebase-store';

const config = {
  apiKey: "AIzaSyAvGxdbucQRfyVnNPVPAXaClOEeJULEQaA",
  authDomain: "dinder-50d67.firebaseapp.com",
  databaseURL: "https://dinder-50d67.firebaseio.com",
  projectId: "dinder-50d67",
  storageBucket: "dinder-50d67.appspot.com",
  messagingSenderId: "1020531879412"
};


class Settings extends MobxFirebaseStore {
  constructor () {
    firebase.initializeApp(config);
    super(firebase.database().ref());
    
    this.splashTime = 1000;
    this.splashImg = require('../../img/splash.jpg')
  }
  
  get SplashTime() {
    return this.splashTime
  }
  
  get SplashImg() {
    return this.splashImg
  }
}

export default Settings;