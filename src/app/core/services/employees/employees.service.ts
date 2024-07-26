import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../models/employees/employees';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private readonly urlApi = "http://127.0.0.1:8081"
  constructor( private http: HttpClient) { }

  public CreateEmployee(data: Employee): Observable<any>{
    return this.http.post(this.urlApi+"/employees", data)
  }
}
