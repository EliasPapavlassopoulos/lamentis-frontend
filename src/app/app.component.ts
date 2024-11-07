import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/services';

@Component({
    selector: 'lamentis-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <p class="text-pretty pt-[20rem] text-center text-[3rem]">
            See you soon !
        </p>

        <button (click)="register('e.papa@live.de', '12345678')">
            RegisterUser
        </button>

        <router-outlet />
    `,
})
export class AppComponent {
    #authServeice = inject(AuthService);

    register(email: string, password: string) {
        if (email && password) {
            this.#authServeice.register(email, password);
        }
    }
}
