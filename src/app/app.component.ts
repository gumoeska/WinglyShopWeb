import { Component } from '@angular/core';
import { Login } from './models/auth/login';
import { Register } from './models/auth/register';
import { JwtAuth } from './models/auth/jwtAuth';
import { AuthenticationService } from './core/services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WinglyShop';
}
