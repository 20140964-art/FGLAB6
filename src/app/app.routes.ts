import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDeatilsComponent } from './product-deatils/product-deatils.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product-deatils/:id', component: ProductDeatilsComponent } 
];
