import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // humanBeing : human = 
  // {
  //   id : 1,
  //   name:"Homo sapiens",
  //   classType:"Mammal"
  // }
  // constructor(private router: Router) {
      
  // }
  // goToProfile()
  // {
  //   this.router.navigate(["profile"])
  // }
  users: user[] = [
    { id: 1, name: 'Mohan Ram', age: 28, email: 'mohan.ram@example.com' },
    { id: 2, name: 'Ananya Iyer', age: 24, email: 'ananya.iyer@example.com' },
    { id: 3, name: 'Rahul Sharma', age: 31, email: 'rahul.sharma@example.com' },
    { id: 4, name: 'Divya Patel', age: 26, email: 'divya.patel@example.com' },
    { id: 5, name: 'Karthik Nair', age: 33, email: 'karthik.nair@example.com' },
    { id: 6, name: 'Sneha Gupta', age: 29, email: 'sneha.gupta@example.com' },
    { id: 7, name: 'Vikram Joshi', age: 35, email: 'vikram.joshi@example.com' },
    { id: 8, name: 'Priya Desai', age: 27, email: 'priya.desai@example.com' },
    { id: 9, name: 'Arjun Verma', age: 32, email: 'arjun.verma@example.com' },
    { id: 10, name: 'Neha Kulkarni', age: 30, email: 'neha.kulkarni@example.com' }
  ];
}


interface user
{
  id: number
  name: string,
  age : number,
  email : string
}