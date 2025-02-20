import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { MyStackComponent } from './my-stack/my-stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroComponent, AboutMeComponent, ColleaguesComponent, ContactformComponent, MyStackComponent, ProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
