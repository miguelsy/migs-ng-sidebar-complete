import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class SidebarService {

  constructor() { }

  private subject = new Subject<any>();
  private salesChannelSubject = new Subject<any>();
  private modeSubject = new Subject<any>();
  private filterSubject = new Subject<any>();

  openSidebar() {
    this.subject.next(
      {
        sidebarOpenState: true
      }
    )
  }

  closeSidebar() {
    this.subject.next(
      {
        sidebarOpenState: false
      }
    )
  }

  getSidebarOpenState() {
    return this.subject.asObservable();
  }

  setSalesChannelInstanceList(items) {
    this.salesChannelSubject.next(
      {
        salesChannelInstanceList: items
      }
    )
  }

  getSalesChannelInstanceList() {
    return this.salesChannelSubject.asObservable();
  }

  setPageMode(mode) {
    this.modeSubject.next(
      {
        pageMode: mode
      }
    )
  }

  getPageMode() {
    return this.modeSubject.asObservable();
  }

  setFilterList(items) {
    this.filterSubject.next(
      {
        filterList: items 
      }
    )
  }

  getFilterList() {
    return this.filterSubject.asObservable();
  }

}