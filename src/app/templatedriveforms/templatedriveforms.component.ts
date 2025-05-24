import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriveforms',
  imports: [FormsModule],
  templateUrl: './templatedriveforms.component.html',
  styleUrl: './templatedriveforms.component.css'
})
export class TemplatedriveformsComponent {
  userDetails: any;
  getData(val: any)
  {
    const data = val as personDetails
    this.userDetails = data
    console.log(this.userDetails)
  }
}

interface personDetails
{
  name:string|null,
  range:number,
  gender : string|null,
  passowrd: string
}
