import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton]
})
export class SobrePage implements OnInit {

  constructor(private router: Router) {}

    h5(){this.router.navigate(["/h5"]);}
    essence(){this.router.navigate(["/essence"]);}
    interlude(){this.router.navigate(["/interlude"]);}

  ngOnInit() {
  }

}



