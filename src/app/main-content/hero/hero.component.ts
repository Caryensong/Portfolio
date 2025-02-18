import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone:true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  imageSrc: string = './assets/img/me_BW.png'; 
  buttonText: string = 'Hello World';
  isHovered: boolean = false;

  changeImage(hover: boolean) {
    this.imageSrc = hover ? './assets/img/me.png' : './assets/img/me_BW.png';
  }

  changeButtonState(hover: boolean) {
    this.isHovered = hover;
  }
  
  
}
