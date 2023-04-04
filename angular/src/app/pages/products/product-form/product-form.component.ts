import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product!: Product;
  productId: string | null = null;

  constructor(private productService: ProductService, router: Router, private activateRoute: ActivatedRoute) {
    activateRoute.queryParamMap.subscribe(params=>{
      this.productId = params.get('id');
    })  
    this.product = {id:0, name: '', price: '', quantity: '' };  
  }


  ngOnInit(): void {
      if(!this.productId){
        this.product.name="";
        this.product.price="";
        this.product.quantity="";
      }else{
        this.productService.getProduct(Number(this.productId)).subscribe((response: Product)=>{
          this.product=response;
        },(error: HttpErrorResponse)=>{
          alert(error);
        });
      }
  }

  onAddProduct(addForm:NgForm): void{
    if(this.productId !== null){
      let tempProduct: Product;
      tempProduct=addForm.value;
      if(tempProduct.name.length !== 0){
        this.product.name=tempProduct.name;
      }
      if(tempProduct.price.length !== 0){
        this.product.price=tempProduct.price;
      }
      if(tempProduct.quantity.length !== 0){
        this.product.quantity=tempProduct.quantity;
      }
      this.product.id=(Number(this.productId));
      this.productService.updateProduct(this.product).subscribe((response: Product)=>{
        console.log(response);
      },(error: HttpErrorResponse)=>{
        alert(error)
      });
    }else{
      this.productService.addProduct(addForm.value).subscribe((response: Product)=>{
        addForm.reset();
      },(error: HttpErrorResponse)=>{
        alert(error);
        addForm.reset();
      });
    }
  
  }
}
