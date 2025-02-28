import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [RouterModule, HeaderComponent, TranslateDirective,NgClass, TranslatePipe],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  isHovered:boolean = false;
  showAnimation: boolean = false;
  isScrolledDown = false;
  lastScrollTop = 0;

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
