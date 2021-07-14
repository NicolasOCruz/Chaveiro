import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener)
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener)
  }

  private _mobileQueryListener!: () => void;
  mobileQuery!: MediaQueryList;

  images = [
    {
      path: "./../../../assets/img/frente.jpg"
    },
    {
      path: "./../../../assets/img/servicos/chave.jpg"
    },
    {
      path: "./../../../assets/img/danilo.jpg"
    },
    {
      path: "./../../../assets/img/frente2.jpg"
    },
    {
      path: "./../../../assets/img/servicos/portao.jpg"
    },
    {
      path: "./../../../assets/img/servicos/porta.jpg"
    }
  ]

  number!: number;


}
