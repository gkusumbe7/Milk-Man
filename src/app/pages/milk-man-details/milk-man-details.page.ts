import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-milk-man-details',
  templateUrl: './milk-man-details.page.html',
  styleUrls: ['./milk-man-details.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonAvatar, IonItem, IonList, IonContent, CommonModule, FormsModule]
})
export class MilkManDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   users = [
    { id: 1, username: 'john_doe' },
    { id: 2, username: 'jane_smith' },
    { id: 3, username: 'mark.taylor' },
    { id: 4, username: 'sophia_lee' },
    { id: 5, username: 'michael1990' },
    { id: 6, username: 'emily_rose' },
    { id: 7, username: 'alex99' },
    { id: 8, username: 'charlie.k' },
    { id: 9, username: 'nina_p' },
    { id: 10, username: 'david_king' },
    { id: 11, username: 'olivia.j' },
    { id: 12, username: 'liam_walker' },
    { id: 13, username: 'ava.miller' },
    { id: 14, username: 'noah.brown' },
    { id: 15, username: 'isabella.jones' },
    { id: 16, username: 'elijah.davis' },
    { id: 17, username: 'mia.garcia' },
    { id: 18, username: 'lucas.rodriguez' },
    { id: 19, username: 'amelia.martinez' },
    { id: 20, username: 'ethan.lopez' },
    { id: 21, username: 'harper.wilson' },
    { id: 22, username: 'charlotte.anderson' },
    { id: 23, username: 'aiden.thomas' },
    { id: 24, username: 'sofia.taylor' },
    { id: 25, username: 'jack.moore' },
    { id: 26, username: 'ella.jackson' },
    { id: 27, username: 'james.white' },
    { id: 28, username: 'grace.harris' },
    { id: 29, username: 'benjamin.clark' },
    { id: 30, username: 'chloe.lewis' },
    { id: 31, username: 'mason.robinson' },
    { id: 32, username: 'zoe.walker' },
    { id: 33, username: 'logan.hall' },
    { id: 34, username: 'lily.allen' },
    { id: 35, username: 'joshua.young' },
  ];

  
}
