import { Subject } from 'rxjs/Subject';

export class GamesService {
  removedFromCart$ = new Subject();
  addedToCart$     = new Subject();
}
