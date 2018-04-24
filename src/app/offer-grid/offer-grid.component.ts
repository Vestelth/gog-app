import { Component, OnInit } from '@angular/core';

import { GameModel } from '../models/game.model';
import { GameData } from '../models/game-data';
import { CartData } from '../models/cart-data';

@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.scss']
})

export class OfferGridComponent implements OnInit {
  gameArray = GameData;
  featuredGame: {};

  constructor() { }

  ngOnInit() {
    this.getFeaturedGame();
  }

  getFeaturedGame() {
    // tslint:disable-next-line:prefer-const
    for (let i in this.gameArray) {
      if (this.gameArray[i].status === 'featured_game') {
        this.featuredGame = this.gameArray[i];
      }
    }
  }

}
