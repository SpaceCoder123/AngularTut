import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonnavigate',
  imports: [],
  templateUrl: './buttonnavigate.component.html',
  styleUrl: './buttonnavigate.component.css',
})
export class ButtonnavigateComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  onReload() {
    const confirmReload = window.confirm(
      'Are you sure? Reloading will remove unsaved data.'
    );
    if (confirmReload) {
      // Proceed with reload logic
      console.log('Reload confirmed');
      // Example: this.router.navigate(['/somewhere']);
    } else {
      console.log('Reload cancelled');
    }
  }
}
