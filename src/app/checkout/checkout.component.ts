import { Component, OnInit } from '@angular/core';
import { cartItems } from '../data';
import { CartItem, Offer } from '../interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  cartItems: CartItem[] = cartItems;
  total: number = 0;

  showOffers: boolean = true;
  showSuccess: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.cartItems);
    this.getTotal();
  }

  getTotal() {
    this.total = 0;
    this.cartItems.forEach(
      (ele) => (this.total += ele.quantity * ele.product.price)
    );
  }

  add(index: number) {
    this.cartItems[index].quantity++;
    this.total += this.cartItems[index].product.price;
  }

  subtract(index: number) {
    if (this.cartItems[index].quantity === 0) return;
    this.cartItems[index].quantity--;
    this.total -= this.cartItems[index].product.price;
  }

  onShowOffers() {
    this.showOffers = !this.showOffers;

    if (!this.showOffers) {
      this.cartItems.forEach((ele) => (ele.discount = 0));
      this.getTotal();
    }
  }

  onOfferSelect(cartIndex: number, offerName: string) {
    const cartItem = this.cartItems[cartIndex];
    const offer = this.cartItems[cartIndex].product.offers?.find(
      (ele) => ele.name === offerName
    );
    this.cartItems[cartIndex].discount =
      cartItem.quantity * cartItem.product.price * (offer?.discount || 0);
    this.total -= this.cartItems[cartIndex].discount || 0;
  }

  placeOrder() {
    this.showSuccess = true;
  }

  closeToaster() {
    this.showSuccess = false;
  }
}
