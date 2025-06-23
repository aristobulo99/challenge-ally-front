import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../../environments/environments';

export const weatherapiInterceptor: HttpInterceptorFn = (req, next) => {
  const weatherApiUrl = environment.weatherApi.api_url;
  const apiKey = environment.weatherApi.api_key;

  if (req.url.startsWith(weatherApiUrl)) {
    const modifiedReq = req.clone({
        setParams: {
          ...req.params.keys().reduce((acc, key) => {
            acc[key] = req.params.get(key)!;
            return acc;
          }, {} as { [key: string]: string }),
          key: apiKey
        }
      });
      return next(modifiedReq);
  }

  return next(req);
};
