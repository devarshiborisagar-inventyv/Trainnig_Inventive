import { Component, signal } from '@angular/core';
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
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule
  ]
})
export class ChildComponent {

  cart = signal<CartItem[]>([]);
  grandTotal = signal(0);
  totalItem = signal(0);

  addItemToCart(product: Product) {
    this.updateCart(product, +1);
  }

  removeItemToCart(product: Product) {
    this.updateCart(product, -1);
  }

  private updateCart(product: Product, change: number) {

    this.cart.update(cart => {
      const item = cart.find(
        c => c.product.name === product.name
      );

      // ADD case
      if (!item && change > 0) {
        return [
          ...cart,
          {
            product,
            quentity: 1,
            totalItemPrice: product.price
          }
        ];
      }

      if (!item) return cart;
      if (item.quentity + change < 0) return cart;

      const updated = cart.map(c => {
        if (c !== item) return c;

        const newQty = c.quentity + change;

        if (newQty === 0) return null;

        return {
          ...c,
          quentity: newQty,
          totalItemPrice: c.totalItemPrice + product.price * change
        };
      }).filter(Boolean) as CartItem[];

      return updated;
    });

    this.grandTotal.update(v => v + product.price * change);
    this.totalItem.update(v => v + change);
  }
}
