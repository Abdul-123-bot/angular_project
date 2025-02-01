import { Routes } from '@angular/router';
import { ProductListComponent } from '../Components/product-list/product-list.component';
import { ProductDetailsComponent } from '../Components/product-details/product-details.component';
import { CartComponent } from '../Components/cart/cart.component';

export const routes: Routes = [
    {path: '', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'cart', component: CartComponent}
];
