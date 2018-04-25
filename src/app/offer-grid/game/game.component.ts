import { Component, OnInit, Input } from '@angular/core';

import { GameModel } from '../../models/game.model';
import { GameData } from '../../models/game-data';
import { CartData } from '../../models/cart-data';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game;
  cartArray = CartData;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {}

  countPrice(price, discount) {
    if (discount !== 0) {
      return (price * discount).toFixed(2);
    }

    return price;
  }

  checkDiscount(discount) {
    if (discount === 0) {
      return true;
    }
    return false;
  }

  addCart(element) {
    if (element.status === 'available') {
      element.status = 'in_cart';
      this.gamesService.addedToCart.next(element);
    }
  }
}
