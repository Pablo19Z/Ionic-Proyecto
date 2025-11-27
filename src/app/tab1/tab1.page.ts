import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TatuadoresService } from '../services/tatuadores.service';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, CommonModule, RouterLink]
})
export class Tab1Page implements OnInit {
  tatuadores: any[] = [];

  constructor(private tatuadoresService: TatuadoresService) {}

  ngOnInit() {
    this.tatuadores = this.tatuadoresService.getTatuadores();
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.tatuadores = this.tatuadoresService.getTatuadores();
      event.target.complete();
    }, 1000);
  }
}