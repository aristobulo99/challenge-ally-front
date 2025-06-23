import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "../layout/admin-layout/admin-layout.component";
import { authGuard } from "../../../core/guard/auth/auth.guard";

export const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'dashboards',
                loadComponent: () => import('../views/dashboards/dashboards.component').then(m => m.DashboardsComponent)
            },
            {
                path: 'usuarios',
                loadComponent: () => import('../views/users/users.component').then(m => m.UsersComponent)
            },
            {
                path: '**',
                redirectTo: 'dashboards'
            }
        ]
    }
]