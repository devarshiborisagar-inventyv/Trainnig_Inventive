import { Component, inject, ViewChild } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';
import { CartItem } from './interfaces/cart-item';
import { ChildComponent } from './component/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping-Cart';
  products:Array<Product>=[];
  totalProducts=0;
  productService=inject(ProductService);
  cartItems:Array<CartItem>=[];
  @ViewChild(ChildComponent)childComponent!:ChildComponent;
  
  constructor(){
    this.products=this.productService.getProduct();
  }
  

  addItemToCart(product:Product){
    this.childComponent.addItemToCart(product);
  }
  

}
