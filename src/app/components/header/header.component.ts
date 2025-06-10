import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isMenuOpen = false;
  pageChangeSound = new Audio('assets/audio/abrir-asistente.mp3');

  constructor(private router: Router) {
    this.pageChangeSound.volume = 0.5; 
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  playSoundIfAllowed(): void {
    const currentUrl = this.router.url;
    
    if (currentUrl === '/home' || currentUrl === '/acerca-de') {
      this.pageChangeSound.currentTime = 0; 
      
      this.pageChangeSound.play();
    }
  }

  handleMobileNavClick(): void {
    this.playSoundIfAllowed();
    this.toggleMenu();
  }
}