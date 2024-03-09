import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup
} from '@angular/cdk/drag-drop';
import { AddTicketModalComponent } from '../../components/layouts/add-ticket-modal/add-ticket-modal.component';
import { CommonModule } from '@angular/common';
/**
 * @title Drag&Drop connected sorting
 */

@Component({
  selector: 'app-boards-page',
  templateUrl: './boards-page.component.html',
  styleUrl: './boards-page.component.css',
  standalone: true,
  imports: [CdkDropList, CdkDrag, AddTicketModalComponent, CommonModule, CdkDropListGroup],
})
export class BoardsPageComponent {
  input_card: boolean = false;
  board_lists: { [key: string]: { id: number, title: string }[] } = {
    todo: [
      { id: 1, title: "Tam" },
      { id: 2, title: "Ermanno" },
      { id: 3, title: "Port" },
      { id: 4, title: "Adrienne" },
      { id: 5, title: "Jeanie" },
      { id: 6, title: "Valentina" },
    ],
    progress: [
      { id: 1, title: "Tam" },
      { id: 2, title: "Ermanno" },
      { id: 3, title: "Port" },
      { id: 4, title: "Adrienne" },
    ],
    done: [
      { id: 1, title: "Tam" },
      { id: 2, title: "Ermanno" },
      { id: 3, title: "Port" },
    ]
  }

  tickets = [
    { id: 1, title: "Tam", status: "Todo" },
    { id: 2, title: "Ermanno", status: "Done" },
    { id: 3, title: "Port", status: "Done" },
    { id: 4, title: "Adrienne", status: "Done" },
    { id: 5, title: "Jeanie", status: "Progress" },
    { id: 6, title: "Valentina", status: "Todo" },
    { id: 7, title: "Newton", status: "Progress" },
    { id: 8, title: "Asa", status: "Todo" },
    { id: 9, title: "Tildy", status: "Progress" },
    { id: 10, title: "Dody", status: "Progress" },
    { id: 11, title: "Scot", status: "Todo" },
    { id: 12, title: "Hadria", status: "Progress" },
    { id: 13, title: "George", status: "Done" },
    { id: 14, title: "Peirce", status: "Progress" },
    { id: 15, title: "Felita", status: "Todo" },
    { id: 16, title: "Daven", status: "Todo" },
    { id: 17, title: "Del", status: "Done" },
    { id: 18, title: "Audry", status: "Todo" },
    { id: 19, title: "Laurice", status: "Done" },
    { id: 20, title: "Averil", status: "Todo" }
  ]

  arun(item: any) {
    console.log(item);
    this.input_card = true
    // item.value.push({ id: item.value.length + 1, title: 'Arun Gounder' })
  }

  // add_ticket(title: any) {
  //   this.board_lists.todo.push({ id: 20, title: "Averil" })
  // }

  add_column() {

  }

  drop(event: any) {
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
