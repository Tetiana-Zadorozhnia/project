import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-icons',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer-icons.component.html',
  styleUrls: ['./footer-icons.component.css'],
})
export class FooterIconsComponent {
  links = [
    { linkSrc: 'assets/images/icons.svg#icon-linkedin', url: '/linked-in' },
    { linkSrc: 'assets/images/icons.svg#icon-facebook', url: '/facebook' },
    { linkSrc: 'assets/images/icons.svg#icon-instagram', url: '/instagram' },
  ];
}
