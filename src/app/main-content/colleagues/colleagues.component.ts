import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {
  isHovered:boolean = false;
  showAnimation: boolean = false;

  cards:{
    name:string;
    image:string;
    linkedIn:string;
    job:string;
    text:string;
  }[]=[
 {   
  name:'Barbora Lambeinova',
  image:'./assets/img/cardB.png',
  linkedIn:'https://www.linkedin.com/in/barbora-lambeinova-33706a35a/',
  job: 'Frontend Developer',
  text:'colleagues.card1',
 },
 {   
  name:'Albina Januzi',
  image:'./assets/img/cardA.png',
  linkedIn:'https://www.linkedin.com/in/albina-januzi/',
  job: 'B.Sc. in Computer Engineering',
  text:'colleagues.card2',
 },
 {   
  name:'Catalina Acosta Rivera',
  image:'./assets/img/cardB.png',
  linkedIn:'https://www.linkedin.com/in/catalina-acosta-rivera/',
  job: 'Project Manager & Frontend Developer',
  text:'colleagues.card3',
 },

  ];

  
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

}
