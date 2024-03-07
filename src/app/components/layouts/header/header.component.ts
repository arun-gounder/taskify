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
  
  constructor() { }

  isDropdownOpen = false;
}
