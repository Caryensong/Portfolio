import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hoverStates: { [key: string]: boolean } = {};

  changeButtonState(link: string, hover: boolean) {
    this.hoverStates[link] = hover;
  }

  activeSection: string = 'contact'; // Setze den aktiven Bereich hier

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
