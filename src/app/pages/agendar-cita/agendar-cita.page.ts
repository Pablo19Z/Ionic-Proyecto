import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonContent,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonIcon,
  IonAvatar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonContent,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
    IonItem, IonLabel, IonInput, IonTextarea, IonDatetime, IonButton, IonIcon,
    IonAvatar
  ]
})
export class AgendarCitaPage implements OnInit {
  tatuador: any = null;
  cita: any = { 
    fecha: '', 
    hora: '', 
    descripcion: '', 
    nombreCliente: '', 
    telefono: '' 
  };

  esReprogramacion = false;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    const data = sessionStorage.getItem('tatuadorCitaTemp');
    if (data) {
      this.tatuador = JSON.parse(data);
      sessionStorage.removeItem('tatuadorCitaTemp');
    } else {
      this.navCtrl.navigateRoot('/tabs/home');
      return;
    }

    const datosReprogramar = sessionStorage.getItem('citaParaReprogramar');
    if (datosReprogramar) {
      const datos = JSON.parse(datosReprogramar);
      this.cita.fecha = datos.fecha;
      this.cita.hora = datos.hora;
      this.cita.descripcion = datos.descripcion;
      this.esReprogramacion = true;
      sessionStorage.removeItem('citaParaReprogramar');
    }
  }

  async guardarCita() {
    if (!this.cita.fecha || !this.cita.hora || !this.cita.descripcion || 
        !this.cita.nombreCliente || !this.cita.telefono) {
      this.mostrarToast('Completa todos los campos', 'danger');
      return;
    }

    const citasGuardadas = localStorage.getItem('citas');
    const citas = citasGuardadas ? JSON.parse(citasGuardadas) : [];

    const nuevaCita = {
      tatuador: {
        nombre: this.tatuador.nombre,
        foto: this.tatuador.foto,
        ciudad: this.tatuador.ciudad
      },
      fecha: this.cita.fecha,
      hora: this.cita.hora,
      descripcion: this.cita.descripcion,
      nombreCliente: this.cita.nombreCliente,
      telefono: this.cita.telefono,
      estado: 'Pendiente',
      fechaCreacion: new Date().toLocaleDateString('es-CO')
    };

    citas.push(nuevaCita);
    localStorage.setItem('citas', JSON.stringify(citas));

    const mensaje = this.esReprogramacion 
      ? '¡CITA REPROGRAMADA CORRECTAMENTE!' 
      : '¡CITA AGENDADA CON ÉXITO!';

    await this.mostrarToast(mensaje, 'success');
    this.navCtrl.navigateRoot('/tabs/profile');
  }

  async mostrarToast(mensaje: string, color: string = 'dark') {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2500,
      color,
      position: 'bottom',
      buttons: [{ text: 'OK', role: 'cancel' }]
    });
    await toast.present();
  }

  getTitulo() {
    return this.esReprogramacion ? 'Reprogramar Cita' : 'Agendar Cita';
  }

  getTextoBoton() {
    return this.esReprogramacion ? 'Reprogramar Cita' : 'Agendar Cita';
  }
}