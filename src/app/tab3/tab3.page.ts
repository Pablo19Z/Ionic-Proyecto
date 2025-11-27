import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonBadge,
  IonButton,
  IonIcon,
  IonButtons
} from '@ionic/angular/standalone';

import { TatuadoresService } from '../services/tatuadores.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    // Componentes de Ionic
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonBadge,
    IonButton,
    IonIcon,
    IonButtons
  ]
})
export class Tab3Page implements OnInit {
  favoritos: any[] = [];

  constructor(private tatuadoresService: TatuadoresService) {}

  ngOnInit() {
    this.cargarFavoritos();
  }

  ionViewWillEnter() {
    this.cargarFavoritos(); // Se actualiza cada vez que entras
  }

  cargarFavoritos() {
    const favoritosIds = JSON.parse(localStorage.getItem('favoritosIds') || '[]');
    const todos = this.tatuadoresService.getTatuadores();

    this.favoritos = todos.filter(tatuador => favoritosIds.includes(tatuador.id));
  }
}