import { Component } from '@angular/core';

@Component({
  selector: 'custom-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  clickFunction()
  {
    console.log("called the function using a different component")
  }
}
