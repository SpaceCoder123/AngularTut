import { Component } from '@angular/core';

@Component({
  selector: 'events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  handleEvent(event: Event) // any not recommeded
  {
    console.log(event.type);
    // console.log((event.target as HTMLInputElement).value)
  }
}
