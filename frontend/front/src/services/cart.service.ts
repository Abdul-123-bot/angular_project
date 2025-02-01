import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = new BehaviorSubject<Product[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(product: Product): void{
    const currentCart = this.cart.getValue();
    this.cart.next([...currentCart, product]);
  }
  
  getCartItems(){
    return this.cart.getValue();
  }
}
