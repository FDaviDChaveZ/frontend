import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/core/models/clients/clients';
import { ClientsService } from 'src/app/core/services/clients/clients.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {
  
  constructor(private clientsService: ClientsService, private toastr: ToastrService) {}

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
        this.toastr.success('Cliente registrado exitosamente', 'Registro Completado')
        this.userForm.reset();
        console.log(response);
      },
      error: (error) => {
        this.toastr.error('Ocurrio un error al registrar el cliente', 'Error')
        console.log(error);
      }
    });
  }

}
