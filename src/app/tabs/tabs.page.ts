import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [
    IonicModule,     // ← ESTO trae ion-router-outlet, ion-header, ion-tabs, TODO
    RouterModule
  ]
})
export class TabsPage {}