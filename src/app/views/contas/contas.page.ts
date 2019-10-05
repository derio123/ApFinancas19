import { Component, OnInit } from '@angular/core';
import { AddcontasComponent } from '../addcontas/addcontas.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss'],
})
export class ContasPage implements OnInit {

  public contas = [
    { descricao: 'Alimentação' },
    { descricao: 'Educação' },
    { descricao: 'Faturas' },
    { descricao: 'Lazer' },
    { descricao: 'Saúde' },
    { descricao: 'Segurança' },
    { descricao: 'Transporte' },
    { descricao: 'Turismo' }
  ];
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async addContasModal(ev: any) {
    const modal = await this.modalCtrl.create({
      component: AddcontasComponent
    });
    return await modal.present();
  }
}
