import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'catalogo', pathMatch: 'full' },
  { 
    path: 'catalogo', 
    loadComponent: () => import('./pages/catalogo/catalogo.component').then(m => m.CatalogoComponent) 
  },
  { 
    path: 'carrinho', 
    loadComponent: () => import('./pages/carrinho/carrinho.component').then(m => m.CarrinhoComponent) 
  }
];