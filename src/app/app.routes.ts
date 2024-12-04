import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AuthComponent } from './routes/auth/auth.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'auth', component: AuthComponent }, // Authentication page
  { path: '**', redirectTo: '/auth' }, // Fallback route
];;
