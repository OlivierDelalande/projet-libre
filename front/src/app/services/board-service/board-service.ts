import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TodosListInterface } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodosListInterface> {
    console.log(this.http.get<TodosListInterface>('back'))
    return this.http.get<TodosListInterface>('back');
  }
}
