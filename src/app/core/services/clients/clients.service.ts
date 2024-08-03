import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../models/clients/clients';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly urlApi = "http://127.0.0.1:8082"
  constructor( private http: HttpClient) { }

  public CreateClient(data: Client): Observable<any>{
    return this.http.post(this.urlApi+"/clients", data)
  }

  public ListClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.urlApi+"/clients")
  }
}
