import { Component, OnInit} from '@angular/core';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  private _opened: boolean = false;
  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _dock: boolean = false;
  private _closeOnClickOutside: boolean = true;
  private _closeOnClickBackdrop: boolean = true;
  private _showBackdrop: boolean = true;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = false;
  private _keyClose: boolean = false;
  private _autoCollapseHeight: number = null;
  private _autoCollapseWidth: number = null;

  private _MODES: Array<string> = ['over', 'push', 'slide'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  private items: string[] = undefined;
  private filters: string[] = undefined;

  private mode: string = undefined;

  constructor(
    private sidebarService: SidebarService,
  ) {}

  ngOnInit() {
    this.sidebarService.getSidebarOpenState().subscribe(message => {
      this.items = undefined;
      this._opened = message.sidebarOpenState;
    })

    this.sidebarService.getSalesChannelInstanceList().subscribe(message => {
      this.items = message.salesChannelInstanceList;
    })

    this.sidebarService.getPageMode().subscribe(message => {
      this.mode = message.pageMode;
      console.log(this.mode);
    })
  }

  private _closeSidebar(): void {
    this._opened = false;
  }

  private _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

  private _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

  private _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

  private _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

  private _toggleDock(): void {
    this._dock = !this._dock;
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  private _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

  private _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

  private _toggleAnimate(): void {
    this._animate = !this._animate;
  }

  private _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

  private _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

  private _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

  private setFilters(): void {
    this.filters = ['2020', 'Honda', 'NSX'];
    this.sidebarService.setFilterList(this.filters);
    this._opened = false;
  }

}
