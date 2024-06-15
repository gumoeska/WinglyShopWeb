import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.css'
})
export class TopProductsComponent {
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
}
