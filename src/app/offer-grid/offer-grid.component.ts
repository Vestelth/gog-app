import { Component, OnInit } from '@angular/core';

import { GameModel } from '../models/game.model';
import { GameData } from '../models/game-data';
import { CartData } from '../models/cart-data';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.scss']
})

export class OfferGridComponent implements OnInit {
  gameArray = GameData;
  cartArray = CartData;
  featuredGame: {};

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.getFeaturedGame();

    this.gamesService.removedFromCart.subscribe(
      (dataID) => {
        for (let index in this.gameArray) {
          if (this.gameArray[index].id === dataID) {
            this.gameArray[index].status = 'available';
          }
        }
      });

    this.gamesService.addedToCart.subscribe(
      (dataID) => {
        for (let index in this.gameArray) {
          if (this.gameArray[index].id === dataID) {
            this.gameArray[index].status = 'in_cart';
            CartData.push(this.gameArray[index]);
          }
        }
      });
  }

  getFeaturedGame() {
    for (let index in this.gameArray) {
      if (this.gameArray[index].status === 'featured_game') {
        this.featuredGame = this.gameArray[index];
      }
    }
  }



  ////////////////////////////
  secretFeature() {
    const secretGame = {
        id       : 7,
        price    : 0,
        discount : 1,
        title    : 'vestelth.github.io',
        imgPath  : '../assets/img/secret_game.png',
        status   : ''
    };

    CartData.push(secretGame);
  }

}
