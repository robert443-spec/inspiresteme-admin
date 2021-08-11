import { Injectable , NgZone } from '@angular/core';
import { User } from './shared/services/user';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";





@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }
}
