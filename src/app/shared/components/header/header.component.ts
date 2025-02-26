import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { TranslateDirective, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [CommonModule, TranslatePipe, TranslateDirective, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() projectPage: boolean = false;
  currentLanguage: string = 'en';
  activeSection = '';

constructor(private translate: TranslateService){
  this.currentLanguage = this.translate.currentLang || 'en';
}

changeLanguage(language: string){
  this.translate.use(language);
  this.currentLanguage = language;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section'); 
    let scrollPosition = window.scrollY + 200;

    sections.forEach((section) => {
      const sectionId = section.getAttribute('id');
      if (!sectionId) return;

      const offsetTop = section.offsetTop;
      const offsetHeight = section.offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        this.activeSection = sectionId;
      }
    });
  }
}