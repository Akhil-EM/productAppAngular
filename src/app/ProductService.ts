import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id: String;
  constructor(private http: HttpClient) { }
  login(user) {
    
    return this.http.post("http://localhost:3000/login", user);
  }
  signup(userData) {
    return this.http.post("http://localhost:3000/signup", userData);
  }


  getProducts() {
    return this.http.get("http://localhost:3000/products");

  }
  addProducts(item) {
    return this.http.post("http://localhost:3000/products/add", item);
  }

  deleteProduct(id) {
    return this.http.post("http://localhost:3000/products/delete", {id:id});
  }

  editProduct(id) {
    return this.http.post("http://localhost:3000/products/edit", {id:id});
  }

  updateProduct(product) {
    return this.http.post("http://localhost:3000/products/update", product);
  }

  setId(id) {
    this.id = id;
  }
 getId(){
   return this.id;
 }

}
