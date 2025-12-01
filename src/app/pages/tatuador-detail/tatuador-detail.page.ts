import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TatuadoresService } from '../../services/tatuadores.service';
import { ToastController, ModalController } from '@ionic/angular/standalone'; // ← AÑADÍ ModalController

import { 
  IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton,
  IonContent, IonButton, IonIcon, IonCard, IonCardHeader,
  IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { MisCitasTatuadorModalComponent } from 'src/app/components/mis-citas-tatuador-modal/mis-citas-tatuador-modal.component';

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
  misCitasConEsteTatuador: any[] = []; // ← NUEVO

  constructor(
    private route: ActivatedRoute,
    private tatuadoresService: TatuadoresService,
    private router: Router,
    private toastCtrl: ToastController,
    private modalCtrl: ModalController // ← NUEVO
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tatuador = this.tatuadoresService.getTatuadorById(id);
    this.cargarFavoritos();
    this.cargarMisCitas(); // ← NUEVO
  }

  cargarFavoritos() {
    const guardado = localStorage.getItem('favoritosIds');
    this.favoritos = guardado ? JSON.parse(guardado) : [];
  }

  esFavorito(): boolean {
    return this.favoritos.includes(this.tatuador.id);
  }

  async toggleFavorito() {
    if (this.esFavorito()) {
      this.favoritos = this.favoritos.filter(id => id !== this.tatuador.id);
      this.mostrarToast('Eliminado de favoritos', 'danger');
    } else {
      this.favoritos.push(this.tatuador.id);
      this.mostrarToast('Agregado a favoritos', 'success');
    }
    localStorage.setItem('favoritosIds', JSON.stringify(this.favoritos));
  }

  // ← NUEVO: CARGAR CITAS CON ESTE TATUADOR
  cargarMisCitas() {
    const todasLasCitas = JSON.parse(localStorage.getItem('citas') || '[]');
    this.misCitasConEsteTatuador = todasLasCitas.filter((c: any) => 
      c.tatuador && c.tatuador.nombre === this.tatuador.nombre
    );
  }

  // ← NUEVO: ABRIR MODAL CON TUS CITAS
  async verMisCitas() {
    const modal = await this.modalCtrl.create({
      component: MisCitasTatuadorModalComponent,
      componentProps: {
        citas: this.misCitasConEsteTatuador,
        tatuador: this.tatuador
      },
      cssClass: 'modal-citas-tatuador'
    });
    await modal.present();
  }

  abrirCitaSinAuthGuard() {
    sessionStorage.setItem('tatuadorCitaTemp', JSON.stringify(this.tatuador));
    this.router.navigate(['/agendar-cita']);
  }

  async mostrarToast(mensaje: string, color: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 1500,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}