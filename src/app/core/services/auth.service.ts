import { Injectable } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import {
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser$: Observable<User | null>;

    constructor(private auth: Auth) {
        this.currentUser$ = user(this.auth);
    }

    register(email: string, password: string): Observable<UserCredential> {
        return from(createUserWithEmailAndPassword(this.auth, email, password));
    }

    login(email: string, password: string): Observable<UserCredential> {
        return from(signInWithEmailAndPassword(this.auth, email, password));
    }

    logout(): Observable<void> {
        return from(signOut(this.auth));
    }

    getCurrentUser(): User | null {
        return this.auth.currentUser;
    }

    getAuthState(): Observable<User | null> {
        return this.currentUser$;
    }
}
