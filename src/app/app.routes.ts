import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';


export const routes: Routes = [
    {path:'', component: LoginComponent, title:'Home Page'},
    {path: 'details/:id', component:DetailsComponent, title:'Home'},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, //cambiar entre AuthGuard o AuthGuardFn dependiendo de cual se quiera usar
    { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '**', redirectTo: 'login' }
];

// Se declara qué rutas requieren autenticación (o permisos) antes de ser accedidas.
// También podrías usar canLoad si quieres proteger módulos cargados bajo demanda (lazy loading).


