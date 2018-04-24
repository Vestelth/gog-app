import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { OfferGridComponent } from './offer-grid/offer-grid.component';
import { CartComponent } from './offer-grid/cart/cart.component';
import { GameComponent } from './offer-grid/game/game.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OfferGridComponent,
    CartComponent,
    GameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
