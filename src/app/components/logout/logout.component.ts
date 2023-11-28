import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {

  constructor(private authService: AuthService) {
  }

  logout() {
    // TODO: implement logout using authService
  }
}
