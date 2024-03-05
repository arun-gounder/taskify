import { Component } from '@angular/core';
import { BoardCardComponent } from '../../components/layouts/board-card/board-card.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [BoardCardComponent],
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent {

}