import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-hero',
  imports: [HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
