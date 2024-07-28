import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/products/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly urlApi = "http://127.0.0.1:8080"
  constructor(private http: HttpClient) {}

  public CreateEmployee(data: Product): Observable<any>{
    return this.http.post(this.urlApi+"/products", data)
  }
}
