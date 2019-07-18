import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-lancar',
  templateUrl: './add-lancar.page.html',
  styleUrls: ['./add-lancar.page.scss'],
})
export class AddLancarPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  fechar() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
