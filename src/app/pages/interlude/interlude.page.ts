import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-interlude',
  templateUrl: './interlude.page.html',
  styleUrls: ['./interlude.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, CommonModule, FormsModule]
})
export class InterludePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
