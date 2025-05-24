import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formgrouping',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './formgrouping.component.html',
  styleUrl: './formgrouping.component.css',
})
export class FormgroupingComponent {
  profileForm = new FormGroup({
    name: new FormControl<LoginForm['name']>('', [Validators.required]),
    password: new FormControl<LoginForm['password']>('', [Validators.required,Validators.minLength(5)]),
    email: new FormControl<LoginForm['email']>('',[Validators.required,Validators.maxLength(50), Validators.email]),
  });

  OnSubmit() {
    console.log(this.profileForm.value);
  }

  setData()
  {
    this.profileForm.setValue({
      name:"mohan",
      password: "ram",
      email:"xyz@gmail.com"
    })
  }

  get name()
  {
    return this.profileForm.get('name')
  }
  get email()
  {
    return this.profileForm.get('email')
  }
  get password()
  {
    return this.profileForm.get('password')
  }
}

interface LoginForm {
  name: string | null;
  password: string | null;
  email: string | null;
}