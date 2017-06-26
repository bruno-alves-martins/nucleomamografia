import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';


import { AppComponent } from "app";
import { LoginFormComponent } from "app/users/login-form/login-form.component";

import { HomeComponent } from "app/home/home.component"
import { CursoFormComponent } from "app/cursos/curso-form/curso-form.component";
import { CursoListComponent } from "app/cursos/curso-list/curso-list.component";
import { ExamesListComponent } from "app/exames/exames-list/exames-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginFormComponent },
  { path: 'cursos', component: CursoListComponent, canActivate: [AuthGuard] },
  { path: 'exames', component: ExamesListComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }