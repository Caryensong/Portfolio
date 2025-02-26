import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import { GameComponent } from './main-content/projects/game/game.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslatePipe, TranslateDirective, GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  projectPage: boolean = false;

  title = 'Portfolio';

  constructor(private translate: TranslateService, private router: Router) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.projectPage = event.url.includes('/game');
      }
    });
}
}
