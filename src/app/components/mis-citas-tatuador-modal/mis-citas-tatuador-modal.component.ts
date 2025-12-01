import { Component, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
  IonContent, IonList, IonItem, IonLabel, IonBadge
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-mis-citas-tatuador-modal',
  template: `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Citas con {{ tatuador?.nombre }}</ion-title>
        <ion-buttons slot="end">
          <ion-button fill="clear" color="light" (click)="cerrar()">
            <ion-icon name="close-outline" slot="icon-only"></ion-icon>
            Cerrar
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-list *ngIf="citas.length > 0; else sinCitas">
        <ion-item *ngFor="let cita of citas; let i = index" lines="none" class="cita-card">
          <ion-label class="ion-text-wrap">
            <h2>{{ cita.fecha }} • {{ cita.hora }}</h2>
            <p>{{ cita.descripcion }}</p>
            <ion-badge color="warning">Pendiente</ion-badge>
          </ion-label>

          <div slot="end" class="botones-accion">
            <ion-button shape="round" color="primary" (click)="reprogramar(i)">
              <ion-icon name="create-outline" slot="start"></ion-icon>
              Reprogramar
            </ion-button>

            <ion-button shape="round" color="danger" (click)="cancelarCita(i)">
              <ion-icon name="trash-outline" slot="start"></ion-icon>
              Cancelar
            </ion-button>
          </div>
        </ion-item>
      </ion-list>

      <ng-template #sinCitas>
        <div class="ion-text-center ion-padding">
          <ion-icon name="calendar-outline" size="large" color="medium"></ion-icon>
          <p>No tienes citas pendientes</p>
        </div>
      </ng-template>
    </ion-content>
  `,
  styles: [`
    .botones-accion {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px;
    }
    .botones-accion ion-button {
      --border-radius: 50px;
      font-weight: 600;
    }
    .cita-card {
      --background: var(--ion-color-light);
      border-radius: 18px;
      margin: 12px 0;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }
    ion-button[fill="clear"] {
      font-weight: 600;
      font-size: 1.1rem;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
    IonContent, IonList, IonItem, IonLabel, IonBadge
  ]
})
export class MisCitasTatuadorModalComponent {
  @Input() citas: any[] = [];
  @Input() tatuador: any;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router
  ) {}

  cerrar() {
    this.modalCtrl.dismiss();
  }

  async cancelarCita(index: number) {
    this.citas.splice(index, 1);
    const todas = JSON.parse(localStorage.getItem('citas') || '[]');
    const restantes = todas.filter((c: any) => {
      return !this.citas.some((mc: any) =>
        mc.fecha === c.fecha &&
        mc.hora === c.hora &&
        mc.descripcion === c.descripcion &&
        c.tatuador?.nombre === this.tatuador.nombre
      );
    });
    localStorage.setItem('citas', JSON.stringify(restantes));
    await this.mostrarToast('Cita cancelada', 'danger');
  }

  reprogramar(index: number) {
    const citaActual = this.citas[index];

    // ELIMINAR LA CITA VIEJA DEL LOCALSTORAGE
    let todas = JSON.parse(localStorage.getItem('citas') || '[]');
    todas = todas.filter((c: any) =>
      !(c.fecha === citaActual.fecha &&
        c.hora === citaActual.hora &&
        c.descripcion === citaActual.descripcion &&
        c.tatuador.nombre === this.tatuador.nombre)
    );
    localStorage.setItem('citas', JSON.stringify(todas));

    // PASAR DATOS PARA EL FORMULARIO
    sessionStorage.setItem('tatuadorCitaTemp', JSON.stringify(this.tatuador));
    sessionStorage.setItem('citaParaReprogramar', JSON.stringify({
      fecha: citaActual.fecha,
      hora: citaActual.hora,
      descripcion: citaActual.descripcion
    }));

    this.modalCtrl.dismiss().then(() => {
      this.router.navigate(['/agendar-cita']);
    });

    this.mostrarToast('Edita y guarda para reprogramar', 'primary');
  }

  async mostrarToast(msg: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2200,
      position: 'bottom',
      color
    });
    await toast.present();
  }
}