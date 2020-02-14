import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: string[] = [];

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit() {
    this._toggleClosed();
  }

  _toggleClosed() {
    this.sidebarService.closeSidebar();
  }

  _toggleOpened() {
    this.sidebarService.setPageMode('nav');
    this.sidebarService.openSidebar();
    setTimeout(() => {
      this.items = ['auction 1', 'auction 2', 'auction 3'];
      this.sidebarService.setSalesChannelInstanceList(this.items);
      console.log('SALES CHANNEL LIST SENT!');
    }, 3000)
  }

}