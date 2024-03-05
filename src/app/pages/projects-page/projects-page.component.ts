import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../components/layouts/project-card/project-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectCardComponent],
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent {

}