import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../components/layouts/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [SidebarComponent,HeaderComponent,RouterOutlet],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {

}
