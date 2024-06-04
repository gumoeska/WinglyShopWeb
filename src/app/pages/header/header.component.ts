import { Component, ViewChild } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  bsModalRef!: BsModalRef;

  constructor(
    private modalService: BsModalService,
    private userService: UserService
    ) { }

  openLoginDialog(): void {
    // this.dialogRef.open(LoginComponent);
    this.bsModalRef = this.modalService.show(LoginComponent);
  }
  
  openRegisterDialog(): void {
    // this.dialogRef.open(RegisterComponent);
    this.bsModalRef = this.modalService.show(RegisterComponent);
  }
}
