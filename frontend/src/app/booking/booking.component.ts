import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings: any;
  loading = true;
  error: any;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getBookings()
      .subscribe(
        ({ data, loading }) => {
          this.bookings = data.getBooking;
          this.loading = loading;
          console.log(this.bookings);
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }

}
