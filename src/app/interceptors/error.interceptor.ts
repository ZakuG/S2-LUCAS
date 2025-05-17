import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error) => {
      if (error.status === 401) {
        alert('No autorizado. Redirigiendo al login.');
        // Aquí puedes redirigir o cerrar sesión
      }
      return throwError(() => error);
    })
  );