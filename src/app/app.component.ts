import {Component, OnInit} from "@angular/core"


@Component({
  selector: 'nm-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Nucleo de Mamografia'



  constructor() { }

  ngOnInit() {
  }

}
