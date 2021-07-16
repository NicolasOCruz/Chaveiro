import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
    this.onScroll()
  }

  ngOnDestroy(): void{
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }

  private _mobileQueryListener!: () => void;
  mobileQuery!: MediaQueryList;

  number!: number;

  public onScroll(){
    const target = <HTMLElement[]><any> document.querySelectorAll('[data-anime]') ; ///document.querySelectorAll('[data-anime]');
     const animationClass = 'animate';
     const windowTop2 = window.pageYOffset + ((window.innerHeight * 3) / 8);

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
