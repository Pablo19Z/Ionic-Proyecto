import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  // RUTAS PÚBLICAS (SIN LOGIN)
  {
    path: 'agendar-cita',
    loadComponent: () => import('./pages/agendar-cita/agendar-cita.page').then(m => m.AgendarCitaPage)
  },
  {
    path: 'tatuador/:id',
    loadComponent: () => import('./pages/tatuador-detail/tatuador-detail.page').then(m => m.TatuadorDetailPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage)
  },

  // ESTADÍSTICAS PÚBLICA (NUNCA PIDE LOGIN)
  {
    path: 'stats',
    loadComponent: () => import('./tabs/stats/stats.page').then(m => m.StatsPage)
  },

  // TABS PROTEGIDAS (solo home, search y profile)
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}