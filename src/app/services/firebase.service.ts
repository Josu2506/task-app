import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { getAuth, updateProfile } from 'firebase/auth';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private utilsSvc: UtilsService
  ) { }

  // Authentication

  login(user: User){
    return this.auth.signInWithEmailAndPassword(user.email, user.password)
  }


  signUp(user: User){
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
  }

  updateUser(user: any){
    const auth = getAuth();
    return updateProfile(auth.currentUser, user);
  }

  getAuthState(){
    return this.auth.authState
  }


  async signOut(){
    await this.auth.signOut();
    this.utilsSvc.routerLink('/auth');
    localStorage.removeItem('user');
  }



  //========== Firestore (DATABASE) ======

// === READ ===
  getSubcollection(path: string, subCollectionName: string){
    return this.db.doc(path).collection(subCollectionName).valueChanges({ idField: 'id' })
  }

  // === CREATE ===
  addToSubcollection(path: string, subCollectionName: string, object: any){
    return this.db.doc(path).collection(subCollectionName).add(object)
  }

  // === UPDATE ===
  updateDocument(path: string, object: any){
    return this.db.doc(path).update(object);
  }

  // === DELETE ===
  deleteDocument(path: string){
    return this.db.doc(path).delete()
  }

}
