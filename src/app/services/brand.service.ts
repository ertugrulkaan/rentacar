import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  getAllUrl: string = 'https://localhost:44364/api/brands/getall';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<BrandResponseModel> {
    return this.httpClient
    .get<BrandResponseModel>(this.getAllUrl);

  }
}
