import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ColleaguesComponent } from './colleagues/colleagues.component';
import { MyStackComponent } from './my-stack/my-stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactformComponent } from './contactform/contactform.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule, HeaderComponent, HeroComponent, AboutMeComponent, ColleaguesComponent, ContactformComponent, MyStackComponent, ProjectsComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'

})
export class MainContentComponent {
  isScrolledDown = false;
  lastScrollTop = 0;
  projectPage: boolean = false;
    constructor(private router: Router) {
   
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.projectPage = event.url.includes('/game'); 
        }
      });
  }
  @HostListener('window:scroll', [])
  onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > this.lastScrollTop) {
      this.isScrolledDown = true;
    } else {
      this.isScrolledDown = false;
    }

    this.lastScrollTop = scrollTop;
  }

}
