import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import HomePage from './pages/home/home';
import SunComponent from './pages/sun/sun';


@Component({
  templateUrl: 'build/app.html',
  directives: [SunComponent]
})
export default class SuperFlyApp {
  private rootPage: any;

  constructor(private platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.hide();
      this.rootPage = HomePage;
    });
  }
}

ionicBootstrap(SuperFlyApp, null, {
  pageTransition: 'md',
});
