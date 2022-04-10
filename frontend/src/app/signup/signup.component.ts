import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";

const ADD_USER = gql`
mutation addUser(
  $user_id: Float!,
   $username: String!,
    $password: String!,
     $email: String!) {
  addUser(user_id: $user_id, username: $username, password: $password, email: $email) {
user_id
username
}
}
`;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = "";
  password = "";  
  email = "";
  user_id = 0;
  query: any;
  constructor(private router: Router,private apollo: Apollo) { }
  ngOnInit(): void {
  }
  onSubmit(loginForm: NgForm): void {
    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    this.email = loginForm.value.email;
    this.user_id = loginForm.value.id;

    this.query = this.apollo
    .mutate({
    mutation: ADD_USER,
    variables: {
    user_id: this.user_id,
    username: this.username,
    password: this.password,
    email: this.email
}
})
.subscribe( (data) => {
console.log(data);
alert("Suucess")
})
  }
}
