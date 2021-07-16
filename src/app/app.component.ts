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
      document.getElementById("initial").style.transform = "translateY(-100px)"
    } else {
      document.getElementById("app").style.opacity = "100%";
      document.getElementById("app").style.transform = "translateY(0px)"
      document.getElementById("initial").style.backgroundColor = "white";
      document.getElementById("initial").style.transform = "translateY(0px)"
    }

    const target = <HTMLElement[]><any> document.querySelectorAll('[data-anime]') ; ///document.querySelectorAll('[data-anime]');
     const animationClass = 'animate';
     const windowTop2 = window.pageYOffset + ((window.innerHeight * 3.2) / 8);

     target.forEach((elementt) => {
       if((windowTop2) > elementt.getBoundingClientRect().top){
         elementt.classList.add(animationClass);
       }
       else{
          elementt.classList.remove(animationClass);
       }
      })
  }
}
