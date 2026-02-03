import { Component, inject, signal, ViewChild } from '@angular/core';
import { Product } from './interfaces/product';
import { ProductService } from './services/product.service';
import { CartItem } from './interfaces/cart-item';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './component/child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [
    MatCardModule,MatButtonModule,CommonModule,FormsModule,ChildComponent
  ]
})
export class AppComponent {
  title = 'Shopping-Cart';
  //products:Array<Product>=[];
  products=signal<Product[]>([]);
  productService=inject(ProductService);
  @ViewChild(ChildComponent)childComponent!:ChildComponent;
  
  constructor(){
    this.products.set(this.productService.getProduct());
  }
  

  addItemToCart(product:Product){
    this.childComponent.addItemToCart(product);
  }
  

}
