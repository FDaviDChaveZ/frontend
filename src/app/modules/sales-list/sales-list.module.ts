import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesListComponent } from './sales-list.component';
import { SalesListRoutingModule } from './sales-list.routing.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SalesListComponent],
  imports: [
    CommonModule,
    SalesListRoutingModule,
    ReactiveFormsModule
  ],
  providers:[
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class SalesListModule { }
