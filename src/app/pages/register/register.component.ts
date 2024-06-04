import { Component } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import { Register } from '../../models/auth/register';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'WinglyShop';
  registerDto = new Register();

  constructor(
      public bsModalRef: BsModalRef,
      private authService: AuthenticationService
    ){ }

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe();
  }
}
