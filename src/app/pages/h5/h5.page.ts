import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-h5',
  templateUrl: './h5.page.html',
  styleUrls: ['./h5.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, CommonModule, FormsModule]
})
export class H5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
