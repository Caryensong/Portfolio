import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone:true,
  imports: [RouterModule, HeaderComponent, TranslateDirective, TranslatePipe, NgClass, CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'] 
})
export class GameComponent {
  isHovered:boolean = false;
  showAnimation: boolean = false;
  isProjectPage = true; 

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