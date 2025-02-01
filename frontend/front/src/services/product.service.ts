import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 1,
    name: 'asdv',
    price: 20,
    description: "adsv asdv asdv adsv asdv",
    imageUrl: "#"
  },
  {id: 2,
    name: 'asdvasc',
    price: 210,
    description: "adsascv asdv asdcasv adsv asdv",
    imageUrl: "#1"
  }
 ] ;
  constructor() { }

  getProducts(): Observable<Product[]>{
      return of(this.products);
  }

  getProductsById(id: number): Observable<Product>{
    return of(this.products.find(product => product.id === id)!);
    ;
  }
}
