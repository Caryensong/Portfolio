import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyStackComponent } from './my-stack/my-stack.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeroComponent, AboutMeComponent, ColleaguesComponent, ContactMeComponent, MyStackComponent, ProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
