import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colleagues',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colleagues.component.html',
  styleUrl: './colleagues.component.scss'
})
export class ColleaguesComponent {
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
  text:'supi supi',
 },
 {   
  name:'Karl',
  image:'./assets/img/cardA.png',
  linkedIn:'http/w',
  job: 'Designer',
  text:'It was a pleasure to work with Caryen...',
 },
 {   
  name:'Sarah',
  image:'./assets/img/cardB.png',
  linkedIn:'http/w',
  job: 'Project Manager',
  text:'Caryen was a great team colleague...',
 },

  ];

}
