import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import LoginComponent from './login.component';
import { LoginService } from 'src/app/core/services/login/login.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: LoginComponent }
    ])
  ],
  providers: [LoginService]
})
export class LoginModule {}
