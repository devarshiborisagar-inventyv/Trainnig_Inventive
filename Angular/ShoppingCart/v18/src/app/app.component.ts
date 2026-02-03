import { Component, inject, ViewChild } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';
import { CartItem } from './interfaces/cart-item';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './component/child/child.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    MatCardModule,MatButtonModule,CommonModule,FormsModule,ChildComponent
  ]
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
