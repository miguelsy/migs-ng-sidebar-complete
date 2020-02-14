import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BuyComponent } from './buy/buy.component';
import { HomeComponent } from './home/home.component';
import { SellComponent } from './sell/sell.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ 
    BuyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: 'buy', component: BuyComponent },
      { path: 'sell', component: SellComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


