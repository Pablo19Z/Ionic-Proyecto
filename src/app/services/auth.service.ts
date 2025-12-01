import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: any = null;

  constructor(private router: Router) {
    const saved = localStorage.getItem('currentUser');
    if (saved) {
      this.currentUser = JSON.parse(saved);
    }
  }

  // REGISTRO
  register(nombre: string, email: string, password: string): boolean {
    email = email.trim().toLowerCase();
    if (localStorage.getItem('user_' + email)) {
      return false; // Ya existe
    }
    const user = { nombre: nombre.trim(), email, password };
    localStorage.setItem('user_' + email, JSON.stringify(user));
    this.login(email, password); // Autologin después de registro
    return true;
  }

  // LOGIN
  login(email: string, password: string): boolean {
    email = email.trim().toLowerCase();
    const userData = localStorage.getItem('user_' + email);
    if (userData) {
      const user = JSON.parse(userData);
      if (user.password === password) {
        this.currentUser = { nombre: user.nombre, email: user.email };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        return true;
      }
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.currentUser !== null;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}