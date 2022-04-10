import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
    // Sample Hotel and User
    test_hotel_id = "60327fe582f32749d0b8037e";
    test_user_id = "60322f7aead7ad16e84f49f9";

  constructor(private apollo: Apollo) { }

  getBookings(){
    let document = this.apollo
    .query<any>({
      query: gql`{
        getBooking{
          hotel_id
          booking_date
          booking_start
          booking_end
        }
      }`
    })

    return document;
  }

  addBooking(bookingdate:String, bookingstart:String, bookingend:String){
    const ADD_BOOKING = gql`
      mutation addBooking(
        $hotel_id:        String!
        $booking_date:    String!
        $booking_start:   String!
        $booking_end:     String!
        $user_id:         String!)
        {
          addBooking(
            hotel_id:       $hotel_id,
            booking_date:   $booking_date,
            booking_start:  $booking_start,
            booking_end:    $booking_end,
            user_id:        $user_id)
            {
              booking_date
              booking_start
              booking_end
            }
        }`;

    let document = this.apollo
    .mutate<any>({
      mutation: ADD_BOOKING,variables: {
        hotel_id: this.test_hotel_id,
        booking_date: bookingdate,
        booking_start: bookingstart,
        booking_end:    bookingend,
        user_id: this.test_user_id
      }
    })
    return document;
  }
}
