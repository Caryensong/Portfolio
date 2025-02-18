import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-hero',
  standalone:true,
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  imageSrc: string = './assets/img/me_BW.png'; 

  changeImage(hover: boolean) {
    this.imageSrc = hover ? './assets/img/me.png' : './assets/img/me_BW.png';
  }
  
}
