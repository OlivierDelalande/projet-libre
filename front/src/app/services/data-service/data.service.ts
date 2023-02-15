import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<DataInterface> {
    console.log(this.http.get<DataInterface>('back'))
    return this.http.get<DataInterface>('back');
  }
}
