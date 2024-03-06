import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,ProfileComponent,CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  open_modal = true;
  your_work = true;
  project = true;
  filters = true;
  dashboard = true;
  teams = true;
  plans = true;
  apps = true;
  constructor() { }
}
