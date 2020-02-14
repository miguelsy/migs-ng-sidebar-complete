import { Component, OnInit } from '@angular/core';

import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-child',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  filters: string[] = undefined;

  constructor(
    private sidebarService: SidebarService
  ) { }

  ngOnInit() {
    this.sidebarService.getFilterList().subscribe(message => {
      this.filters = message.filterList;
      console.log(message);
    })
  }

  _toggleOpened() {
    this.sidebarService.setPageMode('filter');
    this.sidebarService.openSidebar();
  }

}