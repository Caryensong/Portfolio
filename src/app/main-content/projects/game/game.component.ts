import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-game',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  isHovered:boolean = false;
  showAnimation: boolean = false;

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