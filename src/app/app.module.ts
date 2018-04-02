import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { OfferGridComponent } from './offer-grid/offer-grid.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    OfferGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
