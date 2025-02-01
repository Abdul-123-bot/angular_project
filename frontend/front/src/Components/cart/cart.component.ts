import { Component, OnChanges } from '@angular/core';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnChanges {
  product: Product = {
    id: 1,
    name: 'asdv',
    price: 20,
    description: "adsv asdv asdv adsv asdv",
    imageUrl: "#"
  };
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  add() {
    this.cartService.addToCart(this.product);
    this.cartItemCount = this.cartService.getCartItems().length;
  }

  ngOnChanges(): void {
    this.cartItemCount = this.cartService.getCartItems().length;
  }
}
