import { Routes } from '@angular/router';

import { WrapperComponent } from './wrapper/wrapper.component';

import { HeaderComponent } from './wrapper/header/header.component';
import { MainComponent } from './wrapper/main/main.component';
import { FooterComponent } from './wrapper/footer/footer.component';


export const routes: Routes = [
  { path: '', component: WrapperComponent, pathMatch: 'full' },
  { path: 'header', component: HeaderComponent },
  { path: 'main', component: MainComponent },
  { path: 'footer', component: FooterComponent },
];
