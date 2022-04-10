import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HotelService } from '../services/hotel.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hotels: any;
  hotelsCity: any;
  loading = true;
  error: any;
  constructor(private hotelService: HotelService) { }
  ngOnInit(): void {
  }
  onSubmitName(searchForm: NgForm): void {
    let hotelName = searchForm.value.searchByName

    this.hotelService.getHotelByName(hotelName)
      .subscribe(
        ({ data, loading }) => {
          if (data.getHotelByName) this.hotels = data.getHotelByName;
          else alert("error");
          this.loading = loading;
        }
      );
  }
  onSubmitCity(citySearchForm: NgForm): void {
    let hotelCity = citySearchForm.value.searchByCity
    this.hotelService.getHotelByCity(hotelCity)
      .subscribe(
        ({ data }) => {
          if (data.getHotelByCity) this.hotelsCity = data.getHotelByCity;
          else alert("error");
        }
      );
  }
}