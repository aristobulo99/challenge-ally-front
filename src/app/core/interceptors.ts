import { authInterceptor } from "./interceptors/auth/auth.interceptor";
import { weatherapiInterceptor } from "./interceptors/weatherapi/weatherapi.interceptor";

export const interceptors = [
    authInterceptor,
    weatherapiInterceptor
]