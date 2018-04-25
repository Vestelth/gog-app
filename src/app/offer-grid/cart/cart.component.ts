import { Component, OnInit } from '@angular/core';

import { GameData } from '../../models/game-data';
import { CartData } from '../../models/cart-data';
import { GamesService } from '../../games.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray = CartData;
  cartActive = false;
  totalPrice = 0;

  constructor(private gamesService: GamesService) {}

  ngOnInit() {
    this.gamesService.addedToCart.subscribe(data => {
      this.cartArray.push(data);
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
    this.totalPrice = 0;

    this.cartArray.forEach(cartItem => {
      if (cartItem.discount > 0) {
        this.totalPrice += cartItem.price * cartItem.discount;
      } else {
        this.totalPrice += cartItem.price;
      }
    });

    return this.totalPrice.toFixed(2);
  }

  removeFromCart(element) {
    this.cartArray = this.cartArray.filter(function(cartItem) {
      return cartItem.id !== element.id;
    });

    this.updateTotalPrice();
    this.gamesService.removedFromCart.next(element.id);
  }

  clearCart() {
    CartData.length = 0;
    this.cartArray = CartData;
    this.updateTotalPrice();
  }
}
