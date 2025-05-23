import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow',
  imports: [],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
  display: boolean = true
  toggleColor()
  {
    this.display = this.display ? false : true
    console.log(this.display)
  }
  color: string = ""

  toggleColors(value: string)
  {
    this.color = value
  }
}
