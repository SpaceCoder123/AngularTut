import { Component } from '@angular/core';

@Component({
  selector: 'loops',
  imports: [],
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.css',
})
export class LoopsComponent {
  users: string[] = ['mohan', 'pavan', 'ram', 'vidyashree'];
  students: Student[] = [
    {
      id: 1,
      name: 'Aarav Mehta',
      age: 16,
      grade: '10th',
      email: 'aarav.mehta@example.com',
    },
    {
      id: 2,
      name: 'Sanya Kapoor',
      age: 17,
      grade: '11th',
      email: 'sanya.kapoor@example.com',
    },
    {
      id: 3,
      name: 'Rohan Sharma',
      age: 15,
      grade: '9th',
      email: 'rohan.sharma@example.com',
    },
  ];
}

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
}
