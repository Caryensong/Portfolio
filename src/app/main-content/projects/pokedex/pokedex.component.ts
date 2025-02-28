import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [RouterModule, HeaderComponent, TranslatePipe, NgClass, TranslateDirective],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  isScrolledDown = false;
  lastScrollTop = 0;
  isHovered: boolean = false;
  showAnimation: boolean = false;


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