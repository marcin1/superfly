import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import SettingsPage from '../settings/settings';

@Component({
  selector: 'home',
  templateUrl: 'build/pages/home/home.html'
})
export default class HomePage {
  constructor(private nav: NavController) {

  }

  goToSettings() {
    this.nav.push(SettingsPage);
  }
}
