import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-manual-navbar',
  templateUrl: './manual-navbar.component.html',
  styleUrls: ['./manual-navbar.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '250px'
      })),
      state('closed', style({
        width: '0px'
      })),
      transition('open <=> closed', [
        animate('0.2s')
      ])
    ]),
  ],
})
export class ManualNavbarComponent implements OnInit {

  showSidebar: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}