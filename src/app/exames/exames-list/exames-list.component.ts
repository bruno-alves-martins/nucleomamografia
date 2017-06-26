import { Component, OnInit, Input } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Exame } from "app/exames/shared/exame";
import { ExameService } from "app/exames/shared/exame.service";

@Component({
  selector: 'nm-exames-list',
  templateUrl: './exames-list.component.html'
})
export class ExamesListComponent implements OnInit {
  
  exames: FirebaseListObservable<Exame[]>;

  @Input() exame: Exame;

  showSpinner: boolean = true;

  constructor(private exameSvc: ExameService) { }

  ngOnInit() {
      this.exames = this.exameSvc
          .getExamesList();
      this.exames.subscribe(() => this.showSpinner = false)

  }

  deleteExame(exame: Exame){
    this.exameSvc.deleteExames(exame.$key)
  }


}
