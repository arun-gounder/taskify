import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrl: './boards-page.component.css',
  standalone: true,
  imports: [CdkDropList, CdkDrag, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule],
})
export class BoardsPageComponent {

  // board_lists = {
  //   todo: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep', 'Arun'],
  //   done: ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'],
  // }
  
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep', 'Arun'];
  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
