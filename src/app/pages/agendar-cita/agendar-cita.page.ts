import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';
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
  cita: any = { fecha: '', hora: '', descripcion: '', nombreCliente: '', telefono: '' };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    const data = sessionStorage.getItem('tatuadorCitaTemp');
    if (data) {
      this.tatuador = JSON.parse(data);
      sessionStorage.removeItem('tatuadorCitaTemp');
    } else {
      this.navCtrl.navigateRoot('/tabs/home');
    }
  }

  guardarCita() {
    if (!this.cita.fecha || !this.cita.hora || !this.cita.descripcion || 
        !this.cita.nombreCliente || !this.cita.telefono) {
      alert('Completa todos los campos');
      return;
    }

    const citas = JSON.parse(localStorage.getItem('misCitas') || '[]');
    citas.push({
      ...this.cita,
      tatuador: this.tatuador,
      estado: 'Pendiente',
      fechaCreacion: new Date().toLocaleDateString('es-CO')
    });

    localStorage.setItem('misCitas', JSON.stringify(citas));
    alert('¡CITA AGENDADA CON ÉXITO!');
    this.navCtrl.navigateRoot('/tabs/profile');
  }
}