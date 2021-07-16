import { ChangeDetectorRef, Component, HostListener, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener)
   }

   ngOnDestroy(): void{
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }

  private _mobileQueryListener!: () => void;
  mobileQuery!: MediaQueryList;


  @HostListener('window:scroll', ['$event'])
  public onScroll(){

    const windowTop = window.pageYOffset// + ((window.innerHeight * 3.2) / 8);

    var windowWidth = window.innerWidth;
    var screenHeight = screen.width;

    if(windowTop > 0){
      document.getElementById("app").style.opacity = "0%";
      document.getElementById("app").style.transform = "translateY(-100px)"
      document.getElementById("initial").style.backgroundColor = "#ffff66";

      if(windowWidth >= 280 && windowWidth <= 300)
        document.getElementById("initial").style.transform = "translateY(-46px)"
      else if(windowWidth > 300 && windowWidth <= 400)
        document.getElementById("initial").style.transform = "translateY(-64px)"
      else if(windowWidth > 400 && windowWidth <= 550)
        document.getElementById("initial").style.transform = "translateY(-77px)"
      else if(windowWidth > 550)
      document.getElementById("initial").style.transform = "translateY(-96px)"
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
