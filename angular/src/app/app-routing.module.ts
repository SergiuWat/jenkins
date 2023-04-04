import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { ProductsComponent } from './pages/products/products.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/productForm', component: ProductFormComponent},
  {path: 'products/editForm', component:ProductFormComponent},
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent}
  
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
