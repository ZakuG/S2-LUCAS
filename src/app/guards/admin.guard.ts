import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = localStorage.getItem('role'); // o usa this.authService.getCurrentUser()?.role

    if (role === 'admin') {
      return true; 
    }
    this.router.navigate(['/unauthorized']);
    return false;
  }
}
