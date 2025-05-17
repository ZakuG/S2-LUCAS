import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
  imports: []
})
export class PerfilComponent {
  form = {
    pristine: false // Simula un formulario sucio (con cambios no guardados)
  };
  //en un formulario real se usaria FormGroup.pristine

    constructor(private router: Router) {}

  dashboard() {
    this.router.navigate(['/dashboard']);
  }
  canDeactivate(): boolean {
    return this.form.pristine || confirm('¿Seguro que quieres salir sin guardar?');
  }
}
