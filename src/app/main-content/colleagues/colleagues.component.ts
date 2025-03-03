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
  name:'Thomas',
  image:'./assets/img/cardB.png',
  linkedIn:'http/w',
  job: 'Frontend Developer',
  text:'colleagues.card1',
 },
 {   
  name:'Karl',
  image:'./assets/img/cardA.png',
  linkedIn:'http/w',
  job: 'Designer',
  text:'colleagues.card2',
 },
 {   
  name:'Sarah',
  image:'./assets/img/cardB.png',
  linkedIn:'http/w',
  job: 'Project Manager',
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
