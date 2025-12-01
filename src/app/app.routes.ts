import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login',    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage) },

  // RUTA DE AGENDAR CITA AHORA SÍ PROTEGIDA Y FUNCIONA PERFECTO
  {
    path: 'agendar-cita',
    loadComponent: () => import('./pages/agendar-cita/agendar-cita.page').then(m => m.AgendarCitaPage),
    canActivate: [authGuard]  // ← PROTEGIDA CON EL GUARD REAL
  },

  {
    path: 'tatuador/:id',
    loadComponent: () => import('./pages/tatuador-detail/tatuador-detail.page').then(m => m.TatuadorDetailPage)
  },

  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then(m => m.TabsPage),
    canActivate: [authGuard],
    children: [
      { path: 'home',     loadComponent: () => import('./tab1/tab1.page').then(m => m.Tab1Page) },
      { path: 'search',   loadComponent: () => import('./pages/search/search.page').then(m => m.SearchPage) },
      { path: 'favorites',loadComponent: () => import('./tab2/tab2.page').then(m => m.Tab2Page) },
      { path: 'profile',  loadComponent: () => import('./tab3/tab3.page').then(m => m.Tab3Page) },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login' }
];