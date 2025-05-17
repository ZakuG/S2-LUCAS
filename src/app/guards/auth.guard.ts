import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: 'root' }) // El servicio estará disponible globalmente
export class AuthGuard implements CanActivate { // Implementa la interfaz CanActivate
  constructor(
    private authService: AuthService, // Servicio que gestiona la autenticación
    private router: Router // Permite redirección de rutas
  ) {}

  canActivate(): boolean {
    // Verificamos si el usuario está autenticado
    if (this.authService.isAuthenticated()) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/']); // Redirige al login si no está autenticado
      return false; // Bloquea la navegación
    }
  }
}
// Este Guard intercepta el intento de navegación antes de llegar a la ruta y verifica si el usuario está autenticado.
// Ideal para proteger rutas como /dashboard, /perfil, /admin, etc.rr