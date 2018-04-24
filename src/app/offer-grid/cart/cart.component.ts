import { Component, OnInit } from '@angular/core';

import { CartData } from '../../models/cart-data';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartArray = CartData;
  totalPrice = 0;

  constructor() {}

  ngOnInit() {}

  cartCountTotalPrice() {
    this.cartArray.forEach(cartItem => {
      this.totalPrice += cartItem.price;
    });

    return this.totalPrice;
  }

  removeFromCart(element) {
    this.cartArray = CartData.filter(function(cartItem) {
      return cartItem.id !== element.id;
    });

    CartData.length = 0;
    this.cartArray.forEach(el => {
      CartData.push(el);
    });

    console.log(CartData, this.cartArray);

    // this.cartCountTotalPrice();
    return this.cartArray;
  }

  clearCart() {
    CartData.length = 0;
  }
}
