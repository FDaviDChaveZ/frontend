import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from '../../models/sales/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private readonly urlApi = "http://127.0.0.1:8083"
  constructor(private http: HttpClient) {}

  public GenerateSale(data: Sales): Observable<any>{
    return this.http.post(this.urlApi+"/sales", data)
  }

  public ListSales(): Observable<Sales[]>{
    return this.http.get<Sales[]>(this.urlApi+"/sales")
  }
}
