import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [FormsModule, IonContent, IonItem, IonLabel, IonInput, IonButton,CommonModule, RouterLink]
})
export class RegisterPage {
  nombre = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.nombre && this.email && this.password) {
      this.authService.login();
      this.router.navigate(['/tabs/home']);
    }
  }
}