import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employees/employees';
import { EmployeesService } from 'src/app/core/services/employees/employees.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor(private employeesService: EmployeesService, private toastr: ToastrService) { }

  userForm: FormGroup = new FormGroup({
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    phone: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  public createEmployee() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const data: Employee = this.userForm.value;
    this.employeesService.CreateEmployee(data).subscribe({
      next: (response) => {
        this.toastr.success('Empleado registrado exitosamente', 'Registro Completado');
        this.userForm.reset();
        console.log(response);
      },
      error: (error) => {
        this.toastr.error('Ocurrio un error al registar al empleado', 'Error');
        console.log(error);
      }
    });
  }
}
