import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/products';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/add`, product);
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/getAll`);
  }

  deleteProduct(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getProduct(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/getProduct/${id}`)
  }

  updateProduct(product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/updateProduct`, product);
  }
}
