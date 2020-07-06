import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;
  loginSuccess : boolean;

  constructor() { 
    this.loginSuccess = false;
  }

  ngOnInit(): void {

  }

  login(){
    let user = localStorage.getItem(this.email + " " + this.password);
    if(user){
      this.loginSuccess = true;
      console.log("Login successful");
      alert("Login successful");
    }
    else
    alert("Login unsuccessful...Retry");

  }

}
