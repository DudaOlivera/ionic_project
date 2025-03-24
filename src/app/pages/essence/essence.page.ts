import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-essence',
  templateUrl: './essence.page.html',
  styleUrls: ['./essence.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, CommonModule, FormsModule]
})
export class EssencePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
