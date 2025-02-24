import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone:true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
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
    http:string;
  }[]=[
    {
    name:"LinkedIn",
    image:"./assets/icons/linkedIn.svg",
    http:"https://www.linkedin.com/in/caryen-song-b6b913317/",
  },
  {
    name:"Github",
    image:"./assets/icons/Github.svg",
    http:"https://github.com/Caryensong",
  },
  {
    name:"Mail",
    image:"./assets/icons/mail.svg",
    http:"mailto:caryensong@googlemail.com",
  },
  ];

  changeLinkHoverState(hover: boolean) {
    this.isLinkHovered = hover;
  }
  
  
}
