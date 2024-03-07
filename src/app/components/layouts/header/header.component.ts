import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';
import { NavModalComponent } from '../nav-modal/nav-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,ProfileComponent,CommonModule,NavModalComponent],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  open_modal = true;
  isDropdownOpen = true;
  
  constructor() { }

  selectedNavItem: string = '';
  nav_items = ["Your Work","Projects","Filters","Dashboards","Teams","Plans","Apps"] 

  setSelectedNavItem(item: string): void {
    this.selectedNavItem = item;
    if(this.isDropdownOpen==true){
      this.isDropdownOpen = false
    }
  }

  close_nav_modal(){
    this.isDropdownOpen = true
  }

}
