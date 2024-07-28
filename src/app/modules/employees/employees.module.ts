import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees.routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class EmployeesModule { }
