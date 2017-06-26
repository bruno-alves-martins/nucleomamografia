import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component'

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { LoginFormComponent } from './users/login-form/login-form.component';
import { AuthService } from "app/core/auth.service";
import { AppRoutingModule } from "app/app-routing.module";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthGuard } from "app/core/auth.guard";
import { HomeComponent } from "app/home/home.component";
import { HeaderComponent } from "app/header/header.component";
import { CursoFormComponent } from './cursos/curso-form/curso-form.component';
import { CursosService } from "app/cursos/shared/cursos.service";
import { CursoListComponent } from './cursos/curso-list/curso-list.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { ExamesListComponent } from './exames/exames-list/exames-list.component';
import { ExamesFormComponent } from './exames/exames-form/exames-form.component';
import { ExameService } from "app/exames/shared/exame.service";

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HomeComponent,
    HeaderComponent,
    CursoFormComponent,
    CursoListComponent,
    CursoDetalheComponent,
    ExamesListComponent,
    ExamesFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [AuthService,
              AuthGuard,
              CursosService,
              ExameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
