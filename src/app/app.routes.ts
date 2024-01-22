import { Routes } from '@angular/router';

import { WrapperComponent } from './wrapper/wrapper.component';

import { HeaderComponent } from './wrapper/header/header.component';
import { MainComponent } from './wrapper/main/main.component';
import { FooterComponent } from './wrapper/footer/footer.component';
 
import { ServicesComponent } from './wrapper/header/navigation/services/services.component';
import { ProductsComponent } from './wrapper/header/navigation/products/products.component';
import { ClientsComponent } from './wrapper/header/navigation/clients/clients.component';
import { NewsComponent } from './wrapper/header/navigation/news/news.component';
import { AboutUsComponent } from './wrapper/header/navigation/about-us/about-us.component';

import { LinkedInComponent } from './wrapper/header/navigation/linked-in/linked-in.component';
import { FacebookComponent } from './wrapper/header/navigation/facebook/facebook.component';
import { InstagramComponent } from './wrapper/header/navigation/instagram/instagram.component';

import { UserLinkComponent } from './wrapper/header/navigation/user-link/user-link.component';
import { UserLoginComponent } from './wrapper/header/navigation/user-login/user-login.component';

import { DemoVersionComponent } from './wrapper/header/demo-button/demo-version/demo-version.component';


export const routes: Routes = [
  { path: '', component: WrapperComponent, pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainComponent },
  { path: 'footer', component: FooterComponent },

  { path: 'services', component: ServicesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'about-us', component: AboutUsComponent },

  { path: 'linked-in', component: LinkedInComponent },
  { path: 'facebook', component: FacebookComponent },
  { path: 'instagram', component: InstagramComponent },

  { path: 'user-link', component: UserLinkComponent },
  { path: 'user-login', component: UserLoginComponent },

  { path: 'demo-version', component: DemoVersionComponent },
];
