import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/core/models/employees/employees';
import { EmployeesService } from 'src/app/core/services/employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent {

  constructor(private employeesService: EmployeesService) { }

  userObj: any = {
    id: 0,
    lastName: '',
    middleName: '',
    firstNames: '',
    dni: '',
    phone: '',
    address: '',
    email: ''
  }
  
  userForm: FormGroup = new FormGroup({
    lastName: new FormControl(''),
    middleName: new FormControl(''),
    firstNames: new FormControl(''),
    dni: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    email: new FormControl('')
  });

  public createEmployee() {
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
