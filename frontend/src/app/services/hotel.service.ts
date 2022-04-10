import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private apollo: Apollo) { }

  getHotels(){
    let document = this.apollo
    .query<any>({
      query: gql`{
        getHotel{
            hotel_name
            street
            city
            postal_code
            price
            email
        }
      }`
    })
    return document;
  }

  getHotelByName(name:String){
    let document = this.apollo
    .query<any>({
      query: gql`
        query($hotel_name: String!){
          getHotelByName(hotel_name: $hotel_name){
            hotel_name
            street
            city
            postal_code
            price
            email
        }
      }`,
      variables: {
        hotel_name: name
      }
    })
    return document;
  }

  getHotelByCity(hotelCity:String){
    let document = this.apollo
    .query<any>({
      query: gql`
        query($city: String!){
          getHotelByCity(city: $city){
            hotel_name
            street
            city
            postal_code
            price
            email
        }
      }`,
      variables: {
        city: hotelCity
        }
      })
      return document;
  }
}
