import { Component, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services';

@Component({
    selector: 'lamentis-root',
    standalone: true,
    imports: [RouterOutlet, ReactiveFormsModule],
    template: `
        <p class="text-pretty pt-[20rem] text-center text-[3rem]">
            See you soon !
        </p>

        <form [formGroup]="registrationForm" (ngSubmit)="registrateUser()">
            <input
                type="email"
                placeholder="email"
                [formControl]="registrationForm.controls.email" />
            <input
                type="password"
                placeholder="password"
                [formControl]="registrationForm.controls.password" />

            <button [disabled]="registrationForm.invalid" type="submit">
                register now
            </button>
        </form>

        <router-outlet />
    `,
})
export class AppComponent {
    #authService = inject(AuthService);

    registrationForm = new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
            Validators.required,
            Validators.minLength(8),
        ]),
    });

    registrateUser() {
        const email = this.registrationForm.controls.email.getRawValue();
        const password = this.registrationForm.controls.password.getRawValue();

        if (!email || !password) return;

        this.#authService.register(email, password);
    }
}
