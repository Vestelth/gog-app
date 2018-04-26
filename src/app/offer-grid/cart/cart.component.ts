import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../games.service';
import { GameModel } from '../../models/game.model';
import { CartData } from '../../models/cart-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray = CartData;
  cartActive = false;
  totalPrice: any;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.addedToCart$.subscribe(data => {
      this.cartArray.push(data as GameModel);
      this.updateTotalPrice();
    });
  }

  cartToggle() {
    this.cartActive = !this.cartActive;
  }

  countPrice(price, discount) {
    if (discount !== 0) {
      return (price * discount).toFixed(2);
    }
    return price;
  }

  updateTotalPrice() {
    let price: any = 0;

    if (this.cartArray.length === 0) {
      return this.totalPrice = price.toFixed(2);
    }

    this.cartArray.forEach(cartItem => {
      if (cartItem.discount > 0) {
        price += cartItem.price * cartItem.discount;
      } else {
        price += cartItem.price;
      }
    });

    price = price.toFixed(2);

    return this.totalPrice = price;
  }

  removeFromCart(element) {
    this.cartArray = this.cartArray.filter(function(cartItem) {
      return cartItem.id !== element.id;
    });

    this.updateTotalPrice();
    this.gamesService.removedFromCart$.next(element.id);
  }

  clearCart() {
    this.cartArray.length = 0;
    this.gamesService.removedFromCart$.next('clear');
    this.updateTotalPrice();
  }
}
