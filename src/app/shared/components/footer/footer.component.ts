import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  hoverStates: { [key: string]: boolean } = {};
  @Output() openDialogEvent = new EventEmitter<void>();

  openImpressum(event: Event): void {
    event.preventDefault();
    this.openDialogEvent.emit(); 
  }


  changeButtonState(link: string, hover: boolean) {
    this.hoverStates[link] = hover;
  }

  activeSection: string = 'contact'; 

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}
