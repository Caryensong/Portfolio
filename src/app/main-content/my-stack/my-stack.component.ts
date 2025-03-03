import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-my-stack',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './my-stack.component.html',
  styleUrl: './my-stack.component.scss'
})
export class MyStackComponent {
  isHovered:boolean = false;
  showAnimation: boolean = false;
  isClicked = false; 

  toggleImage() {
    this.isClicked = !this.isClicked; 
  }

  showImage() {
    if (!this.showAnimation) { 
      this.isHovered = true;
      this.showAnimation = true;
      
      setTimeout(() => {
        this.isHovered = false;
        this.showAnimation = false;
      }, 4000);
    }
  }

  skills:{
    name:string;
    icon:string;
  }[]=[
    {
      name: 'HTML',
      icon: './assets/icons/HTML.svg',
    },
    {
      name: 'CSS',
      icon: './assets/icons/CSS.svg',
    },
    {
      name: 'JavaScript',
      icon: './assets/icons/Js.svg',
    },
    {
      name: 'TypeScript',
      icon: './assets/icons/Ts.svg',
    },
    {
      name: 'Angular',
      icon: './assets/icons/Angular.svg',
    },
    {
      name: 'Firebase',
      icon: './assets/icons/Firebase.svg',
    },
    {
      name: 'Git',
      icon: './assets/icons/Git.svg',
    },
    {
      name: 'Rest-Api',
      icon: './assets/icons/Api.svg',
    },
    {
      name: 'Scrum',
      icon: './assets/icons/Scrum.svg',
    },
    {
      name: 'Material Design',
      icon: './assets/icons/MaterialD.svg',
    },
  ];
}
