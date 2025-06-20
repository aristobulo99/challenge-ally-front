import { Routes } from '@angular/router';
import { AuthRoutes } from './modules/auth/routes/auth.routes';
import { AdminRoutes } from './modules/admin/routes/admin.routes';

export const routes: Routes = [
    ...AuthRoutes,
    ...AdminRoutes,
    {
    path: '**',
    redirectTo: '/auht',
    pathMatch:'full'
  }
];
