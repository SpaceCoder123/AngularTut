import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttonnavigate',
  imports: [],
  templateUrl: './buttonnavigate.component.html',
  styleUrl: './buttonnavigate.component.css'
})
export class ButtonnavigateComponent {
  constructor(private router:Router){};

  navigateToHome()
  {
    this.router.navigate(['/home'])
  }
}
