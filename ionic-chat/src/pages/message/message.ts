import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public userProvider: UserProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
