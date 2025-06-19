import { Routes } from '@angular/router';
import { AuthRoutes } from './modules/auth/routes/auth.routes';

export const routes: Routes = [
    ...AuthRoutes,
    {
    path: '**',
    redirectTo: '/auht',
    pathMatch:'full'
  }
];
