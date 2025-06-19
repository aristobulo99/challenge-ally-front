import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "../layout/auth-layout/auth-layout.component";

export const AuthRoutes: Routes = [
    {
        path: 'auht',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('../views/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: '**',
                redirectTo: 'login',
            }
        ]
    }
]