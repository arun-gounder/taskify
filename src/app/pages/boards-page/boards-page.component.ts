import { Component } from '@angular/core';
import { BoardCardComponent } from '../../components/layouts/board-card/board-card.component';

@Component({
  selector: 'app-boards-page',
  standalone: true,
  imports: [BoardCardComponent],
  templateUrl: './boards-page.component.html'
})
export class BoardsPageComponent {

}
