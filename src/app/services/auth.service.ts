import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.hasToken());

  isLoggedIn$ = this.loggedIn.asObservable(); // observable para el componente


  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token; // true si existe el token
    
  }

  isAdmin(): boolean {
    const role = localStorage.getItem('role');
    return role === 'admin';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username')
    localStorage.removeItem('role');
    this.loggedIn.next(false); // <- Esto es necesario
  }
  login(username: string, token: string, role: string = 'user') {
    if (username === 'lucas' && token === '123456') {
      role = 'admin';
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role);
      this.loggedIn.next(true); // <- Esto es necesario
      return true
    } else if (username === 'mati' && token === '123456') {
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('role', role); // role sigue siendo 'user'
      this.loggedIn.next(true); // <- Esto es necesario
      return true
    }
    return false
  }
  getUser(): string | null {
    return localStorage.getItem('usuario');
  }


}
