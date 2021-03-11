import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  getAllUrl: string = 'https://localhost:44364/api/customers/getall';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<CustomerResponseModel> {
    return this.httpClient
    .get<CustomerResponseModel>(this.getAllUrl);

  }
}
