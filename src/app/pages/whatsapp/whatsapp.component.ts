import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public whatsapp(){
    return window.open("https://api.whatsapp.com/send?phone=5511937453307&text=Ol%C3%A1,%20Gostaria%20de%20iniciar%20um%20contato!")
  }
}
