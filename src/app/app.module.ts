import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';

import { SidebarService } from './services/sidebar.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';

@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, FormsModule, SidebarModule.forRoot() ],
  declarations: [ AppComponent, NavbarComponent, HomeComponent, SellComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ SidebarService ]
})
export class AppModule { }
