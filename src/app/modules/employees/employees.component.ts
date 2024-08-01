import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/core/models/employees/employees';
import { EmployeesService } from 'src/app/core/services/employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor(private employeesService: EmployeesService) { }

  userForm: FormGroup = new FormGroup({
    lastName: new FormControl('', Validators.required),
    middleName: new FormControl('', Validators.required),
    firstNames: new FormControl('', Validators.required),
    dni: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    address: new FormControl(''),
    email: new FormControl('')
  });

  public createEmployee() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    const data: Employee = this.userForm.value;
    this.employeesService.CreateEmployee(data).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
