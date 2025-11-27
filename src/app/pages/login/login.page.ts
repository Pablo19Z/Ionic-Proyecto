import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonItem, IonLabel, IonInput, IonButton, CommonModule, RouterLink]
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Aquí puedes poner validación real más adelante
    if (this.email && this.password) {
      this.authService.login();
      this.router.navigate(['/tabs/home']);
    }
  }
}