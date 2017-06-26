import { Injectable } from '@angular/core';
import { FirebaseListObservable, FirebaseObjectObservable, AngularFireDatabase } from "angularfire2/database";
import { Exame } from "app/exames/shared/exame";



@Injectable()
export class ExameService {

  
  private basePath: string = '/exames';


  exames: FirebaseListObservable<Exame[]> = null;
  exame: FirebaseObjectObservable<Exame>  = null;

  constructor(private db: AngularFireDatabase) { }

  getExamesList(query={}): FirebaseListObservable<Exame[]>{
       this.exames = this.db.list(this.basePath, {
         query: query
       });

       return this.exames
  }

  getExame(id: string): FirebaseObjectObservable<Exame>{
    const examePath = `${this.basePath}/${id}`;
    this.exame = this.db.object(examePath)
    return this.exame
  }

  createExame(exame: Exame): void {
    
     this.exames.push(exame)
        .catch(error => this.handleError(error))
  }            

// Update an exisiting item
  updateExame(id: string, value: any): void {
    this.exames.update(id, value)
      .catch(error => this.handleError(error))
  }

  // Deletes a single item
  deleteExames(id: string): void {
      this.exames.remove(id)
        .catch(error => this.handleError(error))
  }

  // Deletes the entire list of items
  deleteAll(): void {
      this.exames.remove()
        .catch(error => this.handleError(error))
  }


  private handleError(error) {
    console.log(error)
  }

}
