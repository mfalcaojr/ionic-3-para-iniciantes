import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

public nome_usuario:string = "Charles França Codigo";//É do tipo público para que o HTML possa enxergar.

public somaDoisNumeros (num1:number, num2:number):void{
  alert(num1+num2);
}
  
constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(1,2);
    console.log('ionViewDidLoad FeedPage');
  }

}
