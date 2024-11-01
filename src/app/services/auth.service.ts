// auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.currentUser$ = user(this.auth);
  }

  // register with e-mail and password
  register(email: string, password: string): Observable<UserCredential> {
    return from(createUserWithEmailAndPassword(this.auth, email, password));
  }

  // login with e-mal and password
  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  // logout
  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  // get current user
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  // state of authentification as observable
  getAuthState(): Observable<User | null> {
    return this.currentUser$;
  }
}