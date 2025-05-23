import { Component } from '@angular/core';

@Component({
  selector: 'app-dynstyling',
  imports: [],
  templateUrl: './dynstyling.component.html',
  styleUrl: './dynstyling.component.css'
})
export class DynstylingComponent {
  color="red"
  fontSize = "30px"
  width = "30"
  zoom = true

  bigHeading = "50px"
  smallHeading = "20px"
  toggleZoom()
  {
    this.zoom =! this.zoom
  }
}
