import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

  authState: any = null;
  name: string = null;

  constructor(private afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              private router:Router) { 

           this.afAuth.authState.subscribe((auth) => {
              this.authState = auth
            });
            
          
          }
  
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  get currentUserObservable(): any {
    return this.afAuth.authState
  }

 emailSignUp(name:string, email:string, password:string) {

    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.name = name
        this.updateUserData()
        this.router.navigate(['/'])
      })
      .catch(error => console.log(error));
  }

 emailLogin(email:string, password:string) {
     return this.afAuth.auth.signInWithEmailAndPassword(email, password)
       .then((user) => {
         this.authState = user
         this.updateUserData()
         this.router.navigate(['/'])
       })
       .catch(error => console.log(error));
  }

 
  // Sends email allowing user to reset password
 resetPassword(email: string) {
    var auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }

//// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['login'])
  }  

private updateUserData(): void {
  // Writes user name and email to realtime db
  // useful if your app displays information about users or for admin features

    let path = `users/${this.currentUserId}`; // Endpoint on firebase
    let data = {
                  email: this.authState.email,
                  name: this.name
                }

    this.db.object(path).update(data)
    .catch(error => console.log(error));

  }
          
}




export class EmailPasswordCredentials {
       email: string;
       password: string;
}      

