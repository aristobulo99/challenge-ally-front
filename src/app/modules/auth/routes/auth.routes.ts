import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "../layout/auth-layout/auth-layout.component";
import { noAuthGuard } from "../../../core/guard/no-auth/no-auth.guard";

export const AuthRoutes: Routes = [
    {
        path: 'auht',
        component: AuthLayoutComponent,
        canActivate: [noAuthGuard],
        children: [
            {
                path: 'login',
                loadComponent: () => import('../views/login/login.component').then(m => m.LoginComponent)
            },
            {
                path: 'signUp',
                loadComponent: () => import('../views/sign-up/sign-up.component').then(m => m.SignUpComponent)
            },
            {
                path: '**',
                redirectTo: 'login',
            }
        ]
    }
]