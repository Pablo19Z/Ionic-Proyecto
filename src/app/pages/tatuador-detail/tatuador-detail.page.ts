import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TatuadoresService } from '../../services/tatuadores.service';

import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonButton, IonIcon, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tatuador-detail',
  templateUrl: './tatuador-detail.page.html',
  styleUrls: ['./tatuador-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
    IonContent, IonButton, IonIcon,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonGrid, IonRow, IonCol
  ]
})
export class TatuadorDetailPage implements OnInit {
  tatuador: any;
  favoritos: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private tatuadoresService: TatuadoresService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tatuador = this.tatuadoresService.getTatuadorById(id);
    this.cargarFavoritos();
  }

  cargarFavoritos() {
    const guardado = localStorage.getItem('favoritosIds');
    this.favoritos = guardado ? JSON.parse(guardado) : [];
  }

  esFavorito(): boolean {
    return this.favoritos.includes(this.tatuador.id);
  }

  toggleFavorito() {
    if (this.esFavorito()) {
      this.favoritos = this.favoritos.filter(id => id !== this.tatuador.id);
    } else {
      this.favoritos.push(this.tatuador.id);
    }
    localStorage.setItem('favoritosIds', JSON.stringify(this.favoritos));
  }

  abrirCitaSinAuthGuard() {
    sessionStorage.setItem('tatuadorCitaTemp', JSON.stringify(this.tatuador));
    window.location.href = '/agendar-cita';
  }
}