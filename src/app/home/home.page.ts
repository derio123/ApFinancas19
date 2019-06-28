import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public lancamentos = [
    {descricao: 'fatura claro'},
    {descricao: 'escola'},
    {descricao: 'teste'},
    {descricao: 'faculdade'},
    {descricao: 'reforma'},
    {descricao: 'casa própria'},
    {descricao: 'conzinha'},
    {descricao: 'quarto'},
    {descricao: 'carro'},
  ];
  APF = 'dashboard';
  constructor( private router: Router) {}
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

  addLancamentos() {
    this.router.navigateByUrl('/add-lancar');
  }
}
