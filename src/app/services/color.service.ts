import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  getAllUrl: string = 'https://localhost:44364/api/colors/getall';

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ColorResponseModel> {
    return this.httpClient
    .get<ColorResponseModel>(this.getAllUrl);

  }
}
