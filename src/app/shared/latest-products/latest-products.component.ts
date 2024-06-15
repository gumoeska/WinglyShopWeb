import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrl: './latest-products.component.css'
})
export class LatestProductsComponent {
  // Latest products
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
}
