import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  showBurgerMenu = false;

  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }

  burgerPath: string = '../../assets/images/icons.svg#icon-burger';
  logoUrl: string = '../../assets/images/logo.svg';

  links: { label: string; url: string }[] = [
    { label: 'Сервіси', url: '/services' },
    { label: 'Послуги', url: '/products' },
    { label: 'Клієнти', url: '/clients' },
    { label: 'Новини', url: '/news' },
    { label: 'Про нас', url: '/about-us' },
  ];
}
