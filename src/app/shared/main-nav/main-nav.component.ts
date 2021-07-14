import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public rotas = [
    { text: 'Serviços e Preços', url: "home"},
    { text: 'Dúvidas Frequentes', url: "contato"},
    { text: 'Fazer pedido', url: "relatorio"},
    { text: 'Contato', url: "loja"}
  ]

}
