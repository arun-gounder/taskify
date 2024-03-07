import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-modal.component.html',
})
export class NavModalComponent {
  
@Input() title=''
 

}
