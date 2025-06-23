import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environments';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastsService } from '../../../shared/services/toasts/toasts.service';
import { ToastsContent } from '../../../shared/interfaces/tosts.interface';
import { AuthService } from '../../../shared/services/auth/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const toasts = inject(ToastsService);
  const auth = inject(AuthService)

  const token = localStorage.getItem('token');
  const isApiUrl = req.url.startsWith(environment.urlBack);

  const handleError = (e: any) => {
    let msg = 'Ha ocurrido un error';
    let type: 'confirm' | 'warning' | 'error' = 'warning';

    if(e.status === 401){
      auth.logout();
    }

    if (e.status >= 400 && e.status < 500) type = 'warning';
    else if (e.status >= 500) type = 'error';

    if (e && e.error) {
      if (typeof e.error === 'string') {
        msg = e.error;
      } else if (e.error.message) {
        msg = e.error.message;
      }
    }

    toasts.setControlToasts({
      active: true,
      duration: 4000,
      type,
      title: `Error: ${e.status}`,
      message: msg
    });

    return throwError(() => e);
  };

  if (isApiUrl && token) {
    const request = req.clone({
      headers: req.headers
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json')
    });
    return next(request).pipe(catchError(handleError));
  }

  return next(req).pipe(catchError(handleError));
};
