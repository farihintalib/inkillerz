import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  my_url: any;
  constructor(public navCtrl: NavController,private sanitize: DomSanitizer) {
  }

  urlpaste(){
    this.my_url = "http://myopensoft.ddns.net:8035/myquest/";
    return this.sanitize.bypassSecurityTrustHtml(this.my_url);
  }

}
