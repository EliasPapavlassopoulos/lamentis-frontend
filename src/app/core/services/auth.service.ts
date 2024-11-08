import { Injectable } from '@angular/core';
import { Auth, User, user } from '@angular/fire/auth';
import {
    UserCredential,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    currentUser$: Observable<User | null>;

    constructor(private auth: Auth) {
        if (!environment.production) {
            connectAuthEmulator(this.auth, 'http://localhost:9099'); //use the emulator when not in production
        }

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
