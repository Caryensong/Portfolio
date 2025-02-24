import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateDirective, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  activeProject: string | null = null;

  onMouseOver(projectName: string) {
    this.activeProject = projectName;
  }
}
