import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoriesDto, CategoriesVM } from 'app/_models/categories';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))['token']
    })
  };

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl = 'https://localhost:5001/api/'
  constructor(private http:HttpClient) { }

  getData(model: CategoriesVM) {
    return this.http.post(this.baseUrl + 'Category/Get', model,httpOptions);
  }
  add(model: CategoriesDto) {
    return this.http.post(this.baseUrl + 'Category/Post', model,httpOptions);
  }
  update(model: CategoriesDto) {
    return this.http.put(this.baseUrl + 'Category/Put', model,httpOptions);
  }
  delete(model: CategoriesDto) {
    return this.http.delete(this.baseUrl + 'Category/Delete', httpOptions);
  }
}
