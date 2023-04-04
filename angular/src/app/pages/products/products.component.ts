import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[];
  product!: Product;
  selectedProductId!: number;
  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {  
    this.getProducts();
  }
  onOpenModel(product: Product | null, mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type= ' button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addProductModal');

    }else if(mode === 'edit'){
      button.setAttribute('data-target','#editProductModal');
    }
    container?.appendChild(button);
    button.click();
  }

  getProducts(): void{
    this.productService.getAllProducts().subscribe((response: Product[])=>{
      this.products=response;
    },(error: HttpErrorResponse)=>{
      alert(error.message);
    });
  }

  onDeleteProduct(): void{
    this.productService.deleteProduct(this.selectedProductId).subscribe((response: void)=>{
      this.getProducts();
    },(error: HttpErrorResponse)=>{
      alert(error);
    });
  }

  goToEditForm(){
    if(this.selectedProductId !== null && this.selectedProductId !== 0){
      this.router.navigate(['products/editForm'], {queryParams: {id: this.selectedProductId}});
    }
    
  }
}
