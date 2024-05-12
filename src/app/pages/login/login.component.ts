import { Component } from '@angular/core';
import { Login } from '../../models/auth/login';
import { Register } from '../../models/auth/register';
import { JwtAuth } from '../../models/auth/jwtAuth';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'WinglyShop';
  loginDto = new Login();
  registerDto = new Register();
  jwtDto = new JwtAuth();

  constructor(private authService: AuthenticationService){ }

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe();
  }

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((jwtDto) => {
      localStorage.setItem('jwtToken', jwtDto.value);
    });
  }
}
