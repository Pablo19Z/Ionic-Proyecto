import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { TatuadoresService } from '../../services/tatuadores.service';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonThumbnail, IonLabel, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonThumbnail, IonLabel, IonBadge, CommonModule, RouterLink]
})
export class SearchPage {
  tatuadoresFiltrados: any[] = [];
  filtro = '';

  constructor(private tatuadoresService: TatuadoresService) {
    this.tatuadoresFiltrados = this.tatuadoresService.getTatuadores();
  }

  filtrar() {
    const texto = this.filtro.toLowerCase();
    this.tatuadoresFiltrados = this.tatuadoresService.getTatuadores().filter(t =>
      t.nombre.toLowerCase().includes(texto) ||
      t.ciudad.toLowerCase().includes(texto) ||
      t.estilo.toLowerCase().includes(texto)
    );
  }
}