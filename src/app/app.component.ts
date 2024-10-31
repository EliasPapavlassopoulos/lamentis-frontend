import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PictureComponent } from '@ethlete/cdk';
import { RegistrationComponent } from './registration';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PictureComponent, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
