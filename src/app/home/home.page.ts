import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { informationCircle } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonContent, IonButton, IonIcon ],

})
export class HomePage {
  constructor(private router: Router) {
      addIcons({informationCircle});}
  sobre(){
    this.router.navigate(["/sobre"]);
  }
}
