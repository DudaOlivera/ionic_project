import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.page').then( m => m.SobrePage)
  },  {
    path: 'essence',
    loadComponent: () => import('./pages/essence/essence.page').then( m => m.EssencePage)
  },
  {
    path: 'h5',
    loadComponent: () => import('./pages/h5/h5.page').then( m => m.H5Page)
  },
  {
    path: 'interlude',
    loadComponent: () => import('./pages/interlude/interlude.page').then( m => m.InterludePage)
  },

];
