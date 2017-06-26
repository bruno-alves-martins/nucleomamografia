import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Curso } from '../shared/curso';
import { CursosService } from '../shared/cursos.service'

@Component({
  selector: 'nm-curso-form',
  templateUrl: './curso-form.component.html'
})
export class CursoFormComponent implements OnInit {

  curso: Curso = new Curso();


  constructor(private cursoSvc: CursosService) { }

  ngOnInit() {
   }

   createCurso(){
     console.log('curssooo')
     console.log(this.curso)
     this.cursoSvc.createCurso(this.curso)
     this.curso = new Curso()
   }



}
