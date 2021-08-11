import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { FirbaseService } from './services/firbase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'inspirestem-admin';

//   isSignedIn = false 
//   constructor(  public firebaseservice : FirbaseService){}
//   ngOnInit() {
//    if (localStorage.getItem('user')!=null)
//    this.isSignedIn = true
//    else
//    this.isSignedIn =false
//  }
//  async onSignup(email : string ,password : string){
//    await this.firebaseservice.signup(email,password)
//    if ( this.firebaseservice.isLoggedIn)
//    this.isSignedIn = true
//  }
//  async onSignin(email : string ,password : string){
//   await this.firebaseservice.signin(email,password)
//   if ( this.firebaseservice.isLoggedIn)
//   this.isSignedIn = true
// }
// handleLogout(){

//   this.isSignedIn = false;

// }

 
}
