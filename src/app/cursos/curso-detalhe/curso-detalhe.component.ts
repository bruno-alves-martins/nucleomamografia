import { Component, OnInit, Input } from '@angular/core';
import { Curso } from "app/cursos/shared/curso";
import { CursosService } from "app/cursos/shared/cursos.service";

@Component({
  selector: 'nm-curso-detalhe',
  templateUrl: './curso-detalhe.component.html'
})
export class CursoDetalheComponent implements OnInit {

  @Input() curso: Curso;

  constructor(private cursoSvc: CursosService) { }

  
  ngOnInit() {
  }

  updateTimeStamp() {
    let date = new Date()
    this.cursoSvc.updateItem(this.curso.$key, { timeStamp: date })
  }

  updateActive(value: boolean) {
    this.cursoSvc.updateItem(this.curso.$key, { active: value })
  }

  deleteItem() {
    this.cursoSvc.deleteItem(this.curso.$key)
  }

}
