import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
    const token: string | null = localStorage.getItem('token')
  
    if(token){
      return router.createUrlTree(['/admin']);
    }
  
    return true;
};
