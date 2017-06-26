import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/core/auth.service";

@Component({
  selector: 'nm-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { }


  

  autenticado(): boolean {
       if(this.auth.authenticated){
          return true; 
        }
        return false;
      
  }
 

  signOut(): void {
     //console.log("signOut")
     this.auth.signOut();
   
   }
  

  ngOnInit() {
    
  }

}
