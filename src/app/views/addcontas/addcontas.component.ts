import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-addcontas',
  templateUrl: './addcontas.component.html',
  styleUrls: ['./addcontas.component.scss'],
})
export class AddcontasComponent implements OnInit {
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

  ngOnInit() {}

  fechar() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }
}
