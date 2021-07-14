import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'danilo-chaveiro';


  @HostListener('window:scroll', ['$event'])
  public onScroll(){
    const windowTop = window.pageYOffset// + ((window.innerHeight * 3.2) / 8);
    if(windowTop > 0){
      document.getElementById("app").style.opacity = "0%";
      document.getElementById("app").style.transform = "translateY(-100px)"
      document.getElementById("initial").style.backgroundColor = "#ffff66";
     // document.getElementById("initial").style.position = "fixed"
      document.getElementById("initial").style.transform = "translateY(-100px)"
     /* document.getElementById("initial").style.zIndex = "100"*/
    } else {
      document.getElementById("app").style.opacity = "100%";
      document.getElementById("app").style.transform = "translateY(0px)"
      document.getElementById("initial").style.backgroundColor = "white";
     // document.getElementById("initial").style.position = "static"
      document.getElementById("initial").style.transform = "translateY(0px)"
    }
  }
}
