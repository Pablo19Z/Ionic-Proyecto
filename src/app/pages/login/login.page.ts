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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,           // ← NECESARIO PARA routerLink
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonLabel
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginPage {
  email = '';
  password = '';
  error = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/tabs/profile']);
    }
  }

  login() {
    this.error = '';
    if (!this.email || !this.password) {
      this.error = 'Completa todos los campos';
      return;
    }

    if (this.authService.login(this.email.trim().toLowerCase(), this.password)) {
      this.router.navigate(['/tabs/profile']);
    } else {
      this.error = 'Correo o contraseña incorrectos';
    }
  }
}