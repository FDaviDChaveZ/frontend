import { Component } from '@angular/core';
import { error } from 'console';
import { Client } from 'src/app/core/models/clients/clients';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrl: './clients-list.component.scss'
})
export class ClientsListComponent {

  clients: Client[] = [];

  constructor(private clientsService: ClientsService) {}

  ngOnInit(): void {
    this.listClients();
  }

  public listClients(): void {
    this.clientsService.ListClients().subscribe(
      (data: Client[]) => {
        this.clients = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
