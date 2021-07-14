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
    { text: 'Como funciona', url: "home"},
    { text: 'Quem somos', url: "contato"},
    { text: 'Dúvidas frequentes', url: "relatorio"},
    { text: 'Loja', url: "loja"}
  ]

}
