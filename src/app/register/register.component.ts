import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  name : string;
  email : string;
  password : string;
  confirmPassword : string;
  registerStatus : boolean;

  registerUser(){
    let obj = {
      name : this.name,
      email : this.email,
      password : this.password,
    };
    console.log(JSON.stringify(obj));
    localStorage.setItem(this.email + " " + this.password,JSON.stringify(obj));
    this.registerStatus = true;
  }
  
  constructor() { 
    this.registerStatus = false;
  }

  ngOnInit(){

  }
}
