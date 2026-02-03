import { Component, Input, Output } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item'; 
import { Product } from '../../interfaces/product';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  imports: [
    MatCardModule,MatButtonModule,CommonModule,FormsModule
  ]
})
export class ChildComponent {

  cart:Array<CartItem>=[];
  grandTotal=0;
  totalItem=0;

  // addItemToCart(incomingProduct:Product){

  //   const existingItem=this.cart.find(
  //     item=>item.product.name===incomingProduct.name
  //   );

  //   if(existingItem){
  //       existingItem.quentity+=1;
  //       existingItem.totalItemPrice+=existingItem.product.price;
  //       this.grandTotal+=existingItem.product.price;
  //       this.totalItem++;
  //   }
  //   else{
  //     this.cart.push({
  //       product:incomingProduct,
  //       quentity:1,
  //       totalItemPrice:incomingProduct.price
  //     })
  //     this.grandTotal+=incomingProduct.price;
  //     this.totalItem++;
  //   }

  // }

  // removeItemToCart(incomingProduct:Product){

  //   const existingItem=this.cart.find(
  //     item=>item.product.name===incomingProduct.name
  //   );

  //   if(existingItem ){
  //     if(existingItem.quentity>0){
  //        existingItem.quentity-=1;
  //       existingItem.totalItemPrice-=existingItem.product.price;
  //         this.grandTotal-=existingItem.product.price;
  //         this.totalItem--;
  //     }
       
  //   }
  //   else{
  //     this.cart.push({
  //       product:incomingProduct,
  //       quentity:1,
  //       totalItemPrice:incomingProduct.price
  //     })

  //      this.grandTotal-=incomingProduct.price;
  //      this.totalItem--;
  //   }

  // }

    addItemToCart(product: Product) {
    this.updateCart(product, +1);
  }

  removeItemToCart(product: Product) {
    this.updateCart(product, -1);
  }

  private updateCart(product: Product, change: number) {

    let item = this.cart.find(
      c => c.product.name === product.name
    );

    // ADD case
    if (!item && change > 0) {
      item = {
        product,
        quentity: 0,
        totalItemPrice: 0
      };
      this.cart.push(item);
    }

    if (!item) return;
    if (item.quentity + change < 0) return;

    item.quentity += change;
    item.totalItemPrice += product.price * change;

    this.grandTotal += product.price * change;
    this.totalItem += change;

    if (item.quentity === 0) {
      this.cart = this.cart.filter(c => c !== item);
    }
  }

}
