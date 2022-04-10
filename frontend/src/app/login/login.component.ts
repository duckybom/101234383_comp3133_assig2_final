import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser')

    if (val != null && val == 'true') {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(loginForm: NgForm): void {
    let userName = loginForm.value.username
    let password = loginForm.value.password

    //Call API/services to validate the user from backend
    if (userName == 'admin' && password == '123') {
      localStorage.setItem('isValidUser', "true");
      //Redirect to home page after login
      this.router.navigate(['/home'])
    } else {
      localStorage.setItem('isValidUser', "false");
      alert('Username or password invalid')
    }
  }

}
