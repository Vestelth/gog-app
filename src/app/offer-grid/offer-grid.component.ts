import { Component, OnInit } from '@angular/core';

import { FeatProduct } from '../models/featured-product.model';
import { Product } from '../models/product.model';
import { ProductData } from './product-data';

@Component({
  selector: 'app-offer-grid',
  templateUrl: './offer-grid.component.html',
  styleUrls: ['./offer-grid.component.scss']
})

export class OfferGridComponent implements OnInit {
  featuredProduct = new FeatProduct(
    1,
    'The Witcher: Adventure Game',
    'assets/img/the_witcher.png'
  );

  productsArray: Product[] = [
    new Product(
      2,
      19.98,
      0.5,
      'Oddworld: Stranger\'s Wrath',
      'assets/img/oddworld_strangers_wrath.png',
      'status'
    ),
    new Product(
      3,
      10.20,
      0,
      'Chaos On Deponia',
      'assets/img/chaos_on_deponia.png',
      'owned'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

  addToCart() {

  }

}
