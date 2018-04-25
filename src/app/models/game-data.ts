import { GameModel } from './game.model';

export const GameData: GameModel[] = [
  {
    id       : 1,
    price    : 0,
    discount : 0,
    title    : 'The Witcher: Adventure Game',
    imgPath  : '../assets/img/the_witcher.png',
    status   : 'featured_game'
  },
  {
    id       : 2,
    price    : 19.98,
    discount : 0.5,
    title    : 'Oddworld: Stranger\'s Wrath',
    imgPath  : 'assets/img/oddworld_strangers_wrath.png',
    status   : 'available'
  },
  {
    id       : 3,
    price    : 9.98,
    discount : 0.5,
    title    : 'Chaos On Deponia',
    imgPath  : 'assets/img/chaos_on_deponia.png',
    status   : 'owned'
  },
  {
    id       : 4,
    price    : 11.98,
    discount : 0.5,
    title    : 'The Settlers 2: Gold Edition',
    imgPath  : 'assets/img/settlers_2.png',
    status   : 'available'
  },
  {
    id       : 5,
    price    : 9.98,
    discount : 0.5,
    title    : 'Neverwinter Nights',
    imgPath  : 'assets/img/neverwinter_nights.png',
    status   : 'available'
  },
  {
    id       : 6,
    price    : 19.98,
    discount : 0,
    title    : 'Assassin\'s Creed: Director\'s Cut',
    imgPath  : 'assets/img/assassins_creed.png',
    status   : 'available'
  }
];

