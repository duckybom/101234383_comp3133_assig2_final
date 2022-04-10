import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private apollo: Apollo) { }
  getUsers(){
    let document = this.apollo
    .query<any>({
      query: gql`{
        getUser{
            username
            password
            email
        }
      }`
    })
    return document;
  }
}