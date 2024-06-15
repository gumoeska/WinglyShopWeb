import { Component } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PromotionSliderComponent } from '../../shared/promotion-slider/promotion-slider.component';
import { TopProductsComponent } from '../../shared/top-products/top-products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  testList = [
    { Id: 1, Name: "Gustavo" },
    { Id: 2, Name: "AAAg" },
    { Id: 3, Name: "QWDQWD" },
  ]

  usernames: string[] = [];
  adminUsername: string[] = [];

  information: string = "Click to get all the information";

  constructor(
    private userService: UserService,
    private dialogRef: MatDialog
  ) { }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe((usersData: any) => {
      this.usernames = usersData.value.map((item: any) => item.name);
    });
  }

  getTheAdminInformation(): void {
    this.userService.getAllUsers().subscribe((userData: any) => {
      this.adminUsername = userData.value
        .filter((item: any) => item.idRole === 1)
        .map((item: any) => item.name);
    });
  }

  getItemFromList(selectedItem: number): string | undefined {
    let selectedItemFromList2 = this.testList.find(x => x.Id === selectedItem)?.Name;

    return selectedItemFromList2;
  }
}
