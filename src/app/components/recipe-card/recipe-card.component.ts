import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {
  @Input() recipe: any;

  pageChangeSound = new Audio('assets/audio/cambiar-pagina.mp3');

  constructor() {
    this.pageChangeSound.volume = 0.5;
  }

  playSoundOnClick(): void {
    this.pageChangeSound.currentTime = 0;
    this.pageChangeSound.play();
  }
}