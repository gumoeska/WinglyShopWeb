import { Component } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Promoções
  slides = [
    {
      img: '../../../assets/img/slide1.png',
      title: 'Promoção N.',
      greentext: '1',
      subtitle: 'Descrição da Promoção',
    },
    {
      img: '../../../assets/img/slide2.png',
      title: 'Promoção N.',
      greentext: '2',
      subtitle: 'Descrição da Promoção',
    },
    {
      img: '../../../assets/img/slide3.png',
      title: 'Promoção N.',
      greentext: '3',
      subtitle: 'Descrição da Promoção',
    }
  ];
slideConfig = {
  accessibility: true,
  dots: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  isFinite: true,
  arrows: true,
  nextArrow:
    '<i class="bi bi-chevron-right mainslick-next" style="color: #fff;"></i>',
  prevArrow:
    '<i class="bi bi-chevron-left mainslick-prev" style="color: #fff;"></i>',
};

// Top Products
slideConfigLogos = {
  accessibility: true,
  dots: false,
  slidesToShow: 4,
  autoplay: false,
  autoplaySpeed: 1500,
  isFinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
slidesLogos = [
  { 
    img: '../../../assets/img/produtoExemplo.jpg',
    description: 'Produto 1',
    lastValue: 'R$ 100,00',
    newValue: 'R$ 95,00'
  },
  { 
    img: '../../../assets/img/produtoExemplo.jpg',
    description: 'Produto 2',
    lastValue: 'R$ 100,00',
    newValue: 'R$ 95,00'
  },
  { 
    img: '../../../assets/img/produtoExemplo.jpg',
    description: 'Produto 3',
    lastValue: 'R$ 100,00',
    newValue: 'R$ 95,00'
  },
  { 
    img: '../../../assets/img/produtoExemplo.jpg',
    description: 'Produto 4',
    lastValue: 'R$ 100,00',
    newValue: 'R$ 95,00'
  },
];

// Latest products corasoul configuration
slideConfiglatestProducts = {
  accessibility: true,
  dots: false,
  slidesToShow: 5,
  autoplay: false,
  autoplaySpeed: 1500,
  isFinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1008,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: '<button type="button" class=" logoslick-next ">next</button>',
  prevArrow: '<button type="button" class="  logoslick-prev  ">prev</button>',
};

  testList= [
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

  getAllUsers(): void{
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

  getItemFromList(selectedItem: number): string | undefined{
    let selectedItemFromList2 = this.testList.find(x => x.Id === selectedItem)?.Name;

    return selectedItemFromList2;
  }
}
