import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/sales-list']); // Redirigir al usuario después del login
      },
      (error) => {
        console.error('Error al iniciar sesión:', error);
        alert('Credenciales inválidas');
      }
    );
  }
}
