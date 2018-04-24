import { Component, OnInit, Input } from '@angular/core';

import { GameModel } from '../../models/game.model';
import { GameData } from '../../models/game-data';
import { CartData } from '../../models/cart-data';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() game;

  constructor() {}

  ngOnInit() {}

  addCart(element) {
    let notInCart = true;

    CartData.forEach(item => {
      if (element.id === item.id) {
        return notInCart = false;
      }
    });

    if (notInCart === true) {
      CartData.push(element);
    }
  }
}
