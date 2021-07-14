import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  animations: [
    trigger('spin', [
        transition(':enter', [
          style({top: '-25%', opacity: 0}),
          animate(500, style({top: 0, opacity: 1})),
      ]),
      transition(':enter', [
        style({top: 0, opacity: 1}),
        animate(500, style({top: '-25%', opacity: 0})),
     ])
    ])
  ]
})
export class WidgetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isWidget : boolean = true;

  public openWidget() {
    this.isWidget = !this.isWidget;
   /* if (!this.isWidget) {
      this.gaAnalytics.eventEmitter('widget', 'open', 'openWidget');
    } else {
      this.gaAnalytics.eventEmitter('widget', 'close', 'closeWidget');
    }*/
  }


}
