import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  const start = Date.now(); // Tiempo de inicio
  console.log('Request:', req.url, req.method);

  return next(req).pipe(
    tap({
      next: event => {
        const elapsed = Date.now() - start; // Tiempo transcurrido
        console.log('Response:', event, 'Time:', elapsed, 'ms');
      },
      error: err => {
        const elapsed = Date.now() - start;
        console.error('Request failed:', err, 'Time:', elapsed, 'ms');
      }
    })
  );
};
