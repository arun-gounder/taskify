import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  is_sidebar = true;
  menu_items = [
    {
      title: 'Planning',
      item: [
        { content: 'Board', icon: "bx bx-time-five" }
      ],
      content: 'Board', icon: "bx bx-time-five"
    },
    { title: 'Developement', content: 'Code', icon: "bx bx-code-alt" },
    { title: 'Operations', content: 'Developments', icon: "bx bx-briefcase" },
  ];
  expanded_index: number | null = null;

  toggleItem(index: number): void {
    if (this.expanded_index === index) {
      this.expanded_index = null;
    } else {
      this.expanded_index = index;
    }
  }
}
