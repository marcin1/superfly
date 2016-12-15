import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'build/pages/settings/settings.html',
  pipes: [TranslatePipe]
})
export default class SettingsPage {
  translate: TranslateService;

  constructor(private nav: NavController, translate: TranslateService) {
    this.translate = translate;
  }

}
