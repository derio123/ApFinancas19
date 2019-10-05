import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
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
    {descricao: 'escritório'}
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addLancamentos() {
    this.router.navigateByUrl('/add-lancar');
  }
}
