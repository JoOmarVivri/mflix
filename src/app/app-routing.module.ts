import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { MoviesComponent } from "src/app/pages/movies/movies.component";
import { MovieItemComponent } from "src/app/pages/movies/movie-item/movie-item.component";
import { Error404Component } from "src/app/pages/error404/error404.component";
import { MoviesListComponent } from './pages/movies/movies-list/movies-list.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from "src/app/pages/login/login.component";
import { AuthGuard } from './globals/guards/auth.guard';
import { UnauthGuard } from './globals/guards/unauth.guard';

const routes: Routes = [
  { path: '', redirectTo:'movies', pathMatch:'full'},
  { path: 'movies', component: MoviesComponent, canActivate:[AuthGuard] ,children:[
    { path: '', component: MoviesListComponent },
    { path: ':id', component: MovieItemComponent },
  ]},
  { path: 'signup', canActivate: [UnauthGuard], component: SignupComponent },
  { path: 'login', canActivate: [UnauthGuard] ,component: LoginComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
