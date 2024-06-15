import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-promotion-slider',
  templateUrl: './promotion-slider.component.html',
  styleUrl: './promotion-slider.component.css'
})
export class PromotionSliderComponent {
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
}
