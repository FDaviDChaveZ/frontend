import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/clients/clients';
import { ClientsService } from 'src/app/core/services/clients/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  
  constructor(private clientsService: ClientsService) {}

  userForm: FormGroup = new FormGroup({
    dni: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    firstNames: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  });

  public createClient() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const data: Client = this.userForm.value;
    this.clientsService.CreateClient(data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
