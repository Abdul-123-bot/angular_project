import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];
  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products; 
    });
  }

}
