import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuComponent } from '../views/menu/menu.component';
import { SaldoComponent } from '../views/saldo/saldo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  APF = 'dashboard';
  constructor(public popoverCtrl: PopoverController, ) { }
  /* segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  } */

  apfTitle(APF) {
    if (this.APF) {
      this.APF = 'dashboard';
    } else {
      this.APF = '';
    }
  }

  async menuPop(ev: any) {
    const modal = await this.popoverCtrl.create({
      component: MenuComponent
    });
    return await modal.present();
  }
}
