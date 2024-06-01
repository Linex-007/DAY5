import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:'product',component:ProductsComponent},
  {path:'contacts',component:ContactComponent},
  {path:'product/:id',component:SingleComponent}
];
