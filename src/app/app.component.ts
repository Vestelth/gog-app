import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GOG.com';

  // hotfix, HostListener needed here
  checkCart(e) {
    if (!e.target.classList.contains('cart-toggle')) {
      document.querySelector('.cart-toggle.active').classList.remove('active');
    }
  }
}
