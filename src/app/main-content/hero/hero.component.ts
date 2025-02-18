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
  isLinkHovered: boolean = false; 

  changeImage(hover: boolean) {
    this.imageSrc = hover ? './assets/img/me.png' : './assets/img/me_BW.png';
  }

  changeButtonState(hover: boolean) {
    this.isHovered = hover;
  }

  links:{
    name:string;
    image:string;
  }[]=[
    {
    name:"LinkedIn",
    image:"./assets/icons/linkedIn.svg",
  },
  {
    name:"Github",
    image:"./assets/icons/Github.svg",
  },
  {
    name:"Mail",
    image:"./assets/icons/mail.svg",
  },

  ];
  
  changeLinkHoverState(hover: boolean) {
    this.isLinkHovered = hover;
  }
  
  
}
