import { Component } from '@angular/core';
import { TatuadoresService } from '../services/tatuadores.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonAvatar, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel, IonAvatar, IonIcon
  ]
})
export class Tab2Page {
  favoritos: any[] = [];

  constructor(private tatuadoresService: TatuadoresService) {
    this.cargarFavoritos();
  }

  ionViewWillEnter() {
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    const ids = JSON.parse(localStorage.getItem('favoritosIds') || '[]');
    this.favoritos = this.tatuadoresService.getTatuadores().filter(t => ids.includes(t.id));
  }
}