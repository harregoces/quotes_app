import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent} from "./components/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isSidebarMinimized = false;
  toggleSidebar() {
    this.isSidebarMinimized = !this.isSidebarMinimized;
  }

}
