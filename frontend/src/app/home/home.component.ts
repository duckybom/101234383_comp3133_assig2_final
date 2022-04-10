import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HotelService } from '../services/hotel.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hotels: any;
  hotelsCity: any;
  loading = true;
  error: any;
  constructor(private router: Router, private hotelService: HotelService) { }

  ngOnInit(): void {
    this.hotelService.getHotels()
      .subscribe(
        ({ data, loading }) => {
          this.hotels = data.getHotel;
          this.loading = loading;
        },
        error => {
          this.loading = false;
          this.error = error;
        }
      );
  }
  onSubmitCity(loginForm: NgForm): void {
    let hotelCity = loginForm.value.searchByCity
    this.hotelService.getHotelByCity(hotelCity)
      .subscribe(
        ({ data }) => {
          if (data.getHotelByCity) this.hotelsCity = data.getHotelByCity;
          else alert("error");
        }
      );
  }
  logOut() {
    localStorage.removeItem('isValidUser');
    this.router.navigate(['login']);
  }

}
