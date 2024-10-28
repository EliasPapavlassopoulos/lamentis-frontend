import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureComponent } from '@ethlete/cdk';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PictureComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'lamentis-frontend';
}
