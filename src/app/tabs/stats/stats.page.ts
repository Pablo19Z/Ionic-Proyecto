import { Component, OnInit } from '@angular/core';
import { TatuadoresService } from '../../services/tatuadores.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
  topTatuadores: any[] = [];
  totalCitas: number = 0;

  constructor(private tatuadoresService: TatuadoresService) {}

  ngOnInit() {
    // Top 5 tatuadores más populares
    const todos = this.tatuadoresService.getTatuadores();
    this.topTatuadores = todos
      .sort((a: any, b: any) => b.rating - a.rating)
      .slice(0, 5)
      .map(t => ({
        ...t,
        citas: Math.floor(Math.random() * 180) + 70
      }));

    // Total de citas guardadas en localStorage
    const citasGuardadas = JSON.parse(localStorage.getItem('misCitas') || '[]');
    this.totalCitas = citasGuardadas.length;
  }
}