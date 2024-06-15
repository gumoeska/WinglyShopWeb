import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { ProductModel } from '../../models/product/productModel';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrl: './bestsellers.component.css'
})
export class BestsellersComponent implements OnInit {
  listOfProducts: any[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (productDto) => {
        this.listOfProducts = productDto;
      },
      error: (error) => {
        alert(error.message);
      }
    });

    console.log(this.listOfProducts);
  }
}
