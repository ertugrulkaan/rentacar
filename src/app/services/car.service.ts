import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  getallwithdetailsUrl: string = 'https://localhost:44364/api/cars/getallwithdetails';

  constructor(private httpClient: HttpClient) { }

  getAllCarsWithDetails():Observable<CarResponseModel> {
    return this.httpClient
    .get<CarResponseModel>(this.getallwithdetailsUrl);

  }

}
