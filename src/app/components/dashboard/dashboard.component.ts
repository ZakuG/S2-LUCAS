import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [HomeComponent]
})
export class DashboardComponent {
  usuario = localStorage.getItem('username') || 'Invitado';
  constructor(private router: Router, private authService: AuthService) {}

  perfil() {
    this.router.navigate(['/perfil']);
  }
  admin() {
    this.router.navigate(['/admin']);
  }
  logout() {
    this.authService.logout()
    window.location.href = '/login';
}

}
