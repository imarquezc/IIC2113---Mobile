import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { TabsPage } from '../pages/tabs/tabs';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { ProposalsPage } from '../pages/proposals/proposals';
import { PoliticiansPage } from '../pages/politicians/politicians';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  tabs : any = [ProposalsPage, PoliticiansPage, OrganizationsPage];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private keyboard: Keyboard) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
      this.keyboard.hideKeyboardAccessoryBar(false);
    });
  }
}
