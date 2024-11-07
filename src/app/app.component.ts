import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'lamentis-root',
    standalone: true,
    imports: [RouterOutlet],
    template: `
        <p class="text-pretty pt-[20rem] text-center text-[3rem]">
            See you soon !
        </p>
        <router-outlet />
    `,
})
export class AppComponent {}
