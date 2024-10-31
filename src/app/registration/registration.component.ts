import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../services';

@Component({
  selector: 'lamentis-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  #authService = inject(AuthService);

  registrationForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  register() {
    const email = this.registrationForm.controls.email.getRawValue();
    const password = this.registrationForm.controls.password.getRawValue();

    if (!email || !password) return;

    this.#authService.register(email, password);
  }
}
