import { Routes } from "@angular/router";
import { AdminLayoutComponent } from "../layout/admin-layout/admin-layout.component";
import { authGuard } from "../../../core/guard/auth/auth.guard";

export const AdminRoutes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [authGuard],
        children: []
    }
]