import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  links: { label: string; url: string }[] = [
    { label: 'Сервіси', url: '/services' },
    { label: 'Послуги', url: '/products' },
    { label: 'Клієнти', url: '/clients' },
    { label: 'Новини', url: '/news' },
    { label: 'Про нас', url: '/about-us' },
  ];

  icons: { iconSrc: string; url: string }[] = [
    { iconSrc: 'assets/images/icons.svg#icon-linkedin', url: '/linked-in' },
    { iconSrc: 'assets/images/icons.svg#icon-facebook', url: '/facebook' },
	 { iconSrc: 'assets/images/icons.svg#icon-instagram', url: '/instagram' },
  ];

  account: { accountSrc: string; url: string } = {
    accountSrc: 'assets/images/account.svg',
    url: '/user-link',
  };

  login: { label: string; url: string } = {
    label: 'Увійти',
    url: '/user-login',
  };

  showBurgerMenu: boolean = false;
}
