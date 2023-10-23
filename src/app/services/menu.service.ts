import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../Menu'

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private urlAPI = 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json';

  constructor(private http: HttpClient) { }

    getAll(): Observable<Menu[]>{
    return this.http.get<Menu[]>(this.urlAPI)
  }
}
