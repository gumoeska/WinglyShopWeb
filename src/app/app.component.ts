import { Component } from '@angular/core';
import { Login } from './models/auth/login';
import { Register } from './models/auth/register';
import { JwtAuth } from './models/auth/jwtAuth';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

  getAllUsers() {
    this.authService.getUsers().subscribe((userData: any) => {
      console.log(userData);
    });
  }
}
