import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";

import { Curso } from './curso'

@Injectable()
export class CursosService {

  private basePath: string = '/cursos';


  cursos: FirebaseListObservable<Curso[]> = null;
  curso: FirebaseObjectObservable<Curso> ;

  constructor(private db: AngularFireDatabase) { }

  getCursosList(query={}): FirebaseListObservable<Curso[]>{
       this.cursos = this.db.list(this.basePath, {
         query: query
       });

       return this.cursos
  }

  getCurso(id: string): FirebaseObjectObservable<Curso>{
    const cursoPath = `${this.basePath}/${id}`;
    this.curso = this.db.object(cursoPath)
    return this.curso
  }

  createCurso(curso: Curso): void {
    console.log(curso)
    this.cursos.push(curso)
        .catch(error => this.handleError(error))
  }            

// Update an exisiting item
  updateItem(id: string, value: any): void {
    this.cursos.update(id, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteItem(id: string): void {
      console.log(id)
      this.cursos.remove(id)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.cursos.remove()
        .catch(error => this.handleError(error))
  }


  private handleError(error) {
    console.log(error)
  }

}
