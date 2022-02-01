import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmMovieListComponent } from './components/adm-movie-list/adm-movie-list.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminRoleGuard } from './guards/admin-role.guard';
import { UserLoginGuard } from './guards/user-login.guard';

const routes: Routes = [

  {
    path: 'cartelera',
    canActivate: [UserLoginGuard],
    loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule)
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'carrito',
    canActivate: [UserLoginGuard],
    component: CartComponent
  },

  {
    path:'admin',
    canActivate: [AdminRoleGuard],
    component: AdmMovieListComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
