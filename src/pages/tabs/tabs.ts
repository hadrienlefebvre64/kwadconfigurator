import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { PartsPage } from '../parts/parts';
import { ConfigPage } from '../config/config';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PartsPage;
  tab3Root = ConfigPage;

  constructor() {

  }
}
