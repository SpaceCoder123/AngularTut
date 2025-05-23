import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf, NgFor],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  toggleHeading : boolean = true
  toggleHeadingValue()
  {
    this.toggleHeading =! this.toggleHeading
  }
  list = ["User1","User2","User3","User4","User5","User6"]
  studentData = [{
    name:"anil",
    age:"21",
    dob:"11-2-12",
    subjects: ["English, Hindi, Kannada"]
  },
  {
    name:"sunil",
    age:"22",
    dob:"12-2-12",
    subjects: ["English, Hindi, Tamil"]
  },
  {
    name:"pranil",
    age:"21",
    dob:"1-2-12",
    subjects: ["English, Hindi, Telugu"]
  },
  {
    name:"vani",
    age:"22",
    dob:"2-2-12",
    subjects: ["English, Hindi, Malayalam"]
  },
]
  login : boolean = true
  toggleLogin()
  {
    this.login =! this.login
  }
}
