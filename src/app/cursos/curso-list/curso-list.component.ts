import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Curso } from "app/cursos/shared/curso";
import { CursosService } from "app/cursos/shared/cursos.service";

@Component({
  selector: 'nm-curso-list',
  templateUrl: './curso-list.component.html'
})
export class CursoListComponent implements OnInit {

   cursos: FirebaseListObservable<Curso[]>;

  @Input() curso: Curso;


  showSpinner: boolean = true;


  constructor(private cursoSvc: CursosService) { }

  ngOnInit() {
     this.cursos = this.cursoSvc.getCursosList({limitToLast: 5})
     this.cursos.subscribe(() => this.showSpinner = false)

  }


deleteItem(curso: Curso) {
    console.log(curso)
    this.cursoSvc.deleteItem(curso.$key)
  }  


}
