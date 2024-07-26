import { Component } from '@angular/core';
import { Employee } from 'src/app/core/models/employees/employees';
import { EmployeesService } from 'src/app/core/services/employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {

  constructor (private employeesService:EmployeesService){

  }

  public createEmployee(){
    const data: Employee = {
      apellidoPaterno: "González",
      apellidoMaterno: "Pérez",
      nombres: "Juan Carlos",
      dni: "12345678",
      telefono: "987654321",
      direccion: "Av. Siempre Viva 742",
      correo: "juan@example.com"
    }
    this.employeesService.CreateEmployee(data).subscribe({
      next: (response) => { 
        console.log(response)
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}