import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basicforms',
  imports: [ReactiveFormsModule],
  templateUrl: './basicforms.component.html',
  styleUrl: './basicforms.component.css'
})
export class BasicformsComponent {
  name=new FormControl<LoginData['name']>("anil"); // anything inside the formcontrol will act as a default value
  password=new FormControl<LoginData['password']>("PASSWORD");
  
  getLoginDetails()
  {
    const payload: LoginData = 
    {
      name: this.name.value ?? '',
      password : this.password.value ?? ''
    }
    console.log(payload)
  }
  setValue()
  {
    this.name.setValue('PETER');
    this.password.setValue("PASSWORD")
  
  }

}

interface LoginData
{
  name: string,
  password: string
}