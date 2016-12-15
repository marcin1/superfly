import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TranslateService, TranslateLoader, TranslateStaticLoader, TranslatePipe} from 'ng2-translate/ng2-translate';
import {Http} from '@angular/http';

import HomePage from './pages/home/home';
import SunComponent from './pages/sun/sun';


@Component({
  templateUrl: 'build/app.html',
  directives: [SunComponent],
  providers: [
    { 
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    },
    TranslateService
  ],
  pipes: [TranslatePipe]
})
export default class SuperFlyApp {
  private rootPage: any;

  constructor(private platform: Platform, private translate: TranslateService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.hide();
      this.rootPage = HomePage;
      this.initializeTranslateServiceConfig();
    });
  }

  initializeTranslateServiceConfig() {
    var userLang = navigator.language.split('-')[0];
    userLang = /(de|en|hr)/gi.test(userLang) ? userLang : 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(userLang);
  }
}

ionicBootstrap(SuperFlyApp, null, {
  pageTransition: 'md',
});
