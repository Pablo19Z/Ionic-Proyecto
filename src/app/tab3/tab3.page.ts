import { Component, ViewChild } from '@angular/core';
import { IonModal, ToastController, IonDatetime, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { TatuadoresService } from '../services/tatuadores.service';

import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList,
  IonItem, IonAvatar, IonLabel, IonButtons, IonBadge
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonIcon, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonList, IonItem, IonAvatar, IonLabel, IonButtons, IonBadge,
    IonModal, IonDatetime, IonInput, IonTextarea   // ← ESTOS SON LOS QUE HACEN QUE APAREZCAN LOS BOTONES Y EL MODAL
  ]
})
export class Tab3Page {

  @ViewChild('modalEditar') modal!: IonModal;

  currentUser: any = null;
  favoritos: any[] = [];
  citas: any[] = [];

  modalAbierto = false;
  citaEditando: any = {};
  indiceEditando = -1;

  constructor(
    private authService: AuthService,
    private toastCtrl: ToastController,
    private tatuadoresService: TatuadoresService
  ) {}

  // ESTO ES LO QUE HACE QUE LAS CITAS NUEVAS APAREZCAN AL INSTANTE
  ionViewWillEnter() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.currentUser = this.authService.getCurrentUser();

    // FAVORITOS
    const idsGuardados = localStorage.getItem('favoritosIds');
    const ids = idsGuardados ? JSON.parse(idsGuardados) : [];
    this.favoritos = ids.map((id: number) => this.tatuadoresService.getTatuadorById(id)).filter(Boolean);

    // CITAS → ESTO SE RECARGA CADA VEZ QUE ENTRAS AL PERFIL
    const citasGuardadas = localStorage.getItem('citas');
    this.citas = citasGuardadas ? JSON.parse(citasGuardadas) : [];
  }

  quitarFavorito(index: number) {
    const tatuadorId = this.favoritos[index].id;
    this.favoritos.splice(index, 1);
    const ids = JSON.parse(localStorage.getItem('favoritosIds') || '[]');
    const nuevoIds = ids.filter((id: number) => id !== tatuadorId);
    localStorage.setItem('favoritosIds', JSON.stringify(nuevoIds));
    this.favoritos = [...this.favoritos];
    this.mostrarToast('Eliminado de favoritos', 'danger');
  }

  cancelarCita(index: number) {
    this.citas.splice(index, 1);
    localStorage.setItem('citas', JSON.stringify(this.citas));
    this.citas = [...this.citas];
    this.mostrarToast('Cita cancelada', 'warning');
  }

  editarCita(index: number) {
    this.indiceEditando = index;
    this.citaEditando = { ...this.citas[index] };
    this.modalAbierto = true;
  }

  guardarEdicion() {
    if (this.indiceEditando >= 0) {
      this.citas[this.indiceEditando] = { ...this.citaEditando };
      localStorage.setItem('citas', JSON.stringify(this.citas));
      this.citas = [...this.citas];
      this.mostrarToast('Cita actualizada', 'success');
    }
    this.modalAbierto = false;
    this.indiceEditando = -1;
  }

  logout() {
    this.authService.logout();
  }

  async mostrarToast(msg: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1800,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}