import { CommonModule, NgClass } from '@angular/common';
import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, NgClass, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  currentLanguage: string = 'en';
  activeSection = '';
  menuOpen = false;
  screenWidth: number = window.innerWidth;
  @Input() projectPage: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const menuElement = document.querySelector('.menu');
    const burgerButton = document.querySelector('.burger-menu');

    if (this.menuOpen && menuElement && !menuElement.contains(event.target as Node) &&
      burgerButton && !burgerButton.contains(event.target as Node)) {
      this.closeMenu();
    }
  }

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translate.currentLang || 'en';
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  links: {
    name: string;
    image: string;
    http: string;
  }[] = [
      {
        name: "LinkedIn",
        image: "./assets/icons/linkedIn.svg",
        http: "https://www.linkedin.com/in/caryen-song-b6b913317/",
      },
      {
        name: "Github",
        image: "./assets/icons/Github.svg",
        http: "https://github.com/Caryensong",
      },
      {
        name: "Mail",
        image: "./assets/icons/mail.svg",
        http: "mailto:caryensong@googlemail.com",
      },
    ];


  changeLanguage(language: string) {
    this.translate.use(language);
    this.currentLanguage = language;
  }
  @HostBinding('class.scrolled') scrolled = false;
  @HostListener('window:scroll', [])
  onScroll() {
    const menuLinks = document.querySelectorAll('nav .menu a'); 
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY + 200;
    this.scrolled = window.scrollY > 80;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      if (!sectionId) return;

      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        this.activeSection = sectionId;

        menuLinks.forEach((link) => link.classList.remove('active-nav'));
      const activeLink = Array.from(menuLinks).find((link) => link.getAttribute('href') === `#${this.activeSection}`);
      if (activeLink) {
        activeLink.classList.add('active-nav');
      }
      }
    });
  }




}