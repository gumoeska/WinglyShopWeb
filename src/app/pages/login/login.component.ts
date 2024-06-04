import { Component } from '@angular/core';
import { Login } from '../../models/auth/login';
import { Register } from '../../models/auth/register';
import { JwtAuth } from '../../models/auth/jwtAuth';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  title = 'WinglyShop';
  loginDto = { login: '', password: '' }; // Initialize loginDto
  jwtDto = new JwtAuth();

  constructor(
      public bsModalRef: BsModalRef,
      private authService: AuthenticationService
    ){ }

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.value);
    });
  }

  forgotPassword(){

  }
}
