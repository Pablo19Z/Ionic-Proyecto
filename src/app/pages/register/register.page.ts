import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonText,
  IonLabel
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonLabel
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterPage {
  nombre = '';
  email = '';
  password = '';
  error = '';
  success = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    this.error = '';
    this.success = '';

    if (!this.nombre || !this.email || !this.password) {
      this.error = 'Todos los campos son obligatorios';
      return;
    }

    if (this.authService.register(this.nombre.trim(), this.email.trim().toLowerCase(), this.password)) {
      this.success = '¡Registrado con éxito! Redirigiendo...';
      setTimeout(() => {
        this.router.navigate(['/tabs/profile']);
      }, 1200);
    } else {
      this.error = 'Este correo ya está registrado';
    }
  }
}