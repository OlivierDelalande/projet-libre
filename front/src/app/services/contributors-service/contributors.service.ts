import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContributorsListInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContributorsService {

  constructor(private http: HttpClient) { }

  getContributors(): Observable<ContributorsListInterface> {
    console.log(this.http.get<ContributorsListInterface>('back'))
    return this.http.get<ContributorsListInterface>('back');
  }
}
