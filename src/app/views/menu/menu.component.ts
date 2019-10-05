import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { SaldoComponent } from '../saldo/saldo.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public router: Router, 
              public popoverCtrl: PopoverController,
              public modalCtrl: ModalController) { }

  ngOnInit() {}

  openAddLancar(){
    this.router.navigate(['add']);
    this.fechar();
  }

  openContas(){
    this.router.navigate(['contas']);
    this.fechar();
  }

  async openSaldo(ev: any){
    const saldo = await this.popoverCtrl.create({
      component: SaldoComponent
    })
    return await saldo.present();
  }

  fechar() {
    this.popoverCtrl.dismiss({
      dismissed: true
    });
  }
  
  /* closeSaldo() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  } */

}
