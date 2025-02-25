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
  isHovered:boolean = false;
  showAnimation: boolean = false;
  activeProject: string | null = null;

  onMouseOver(projectName: string) {
    this.activeProject = projectName;
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
