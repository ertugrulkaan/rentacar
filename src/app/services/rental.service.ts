import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  getallwithdetailsUrl: string = 'https://localhost:44364/api/rentals/getallwithdetails';

  constructor(private httpClient: HttpClient) { }

  getAllCarsWithDetails():Observable<RentalResponseModel> {
    return this.httpClient
    .get<RentalResponseModel>(this.getallwithdetailsUrl);

  }

}
