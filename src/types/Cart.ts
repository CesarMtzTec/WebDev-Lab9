import LineItem from './LineItem';
import Product from './Product';
import Sku from './Sku';

class Cart {
  lineItems: LineItem[] = [] as any;

  addItem(product: Product, sku: Sku, quantity: number, price: number): void {
    console.log('inside addItem');
    var existingSku = false;
    this.lineItems.forEach((item) => {
      console.log('item sku', item.sku.id);
      console.log('new sku', sku.id);
      if (item.sku.id === sku.id) {
        item.quantity += quantity;
        item.totalPrice = item.unitPrice * item.quantity;
        existingSku = true;
      }
    });

    if (!existingSku) {
      const lineItem = {} as LineItem;
      lineItem.product = product;
      lineItem.sku = sku;
      lineItem.quantity = quantity;
      lineItem.unitPrice = price;
      lineItem.totalPrice = quantity * price;

      this.lineItems.push(lineItem);
    }
  }

  removeItem(sku: Sku) {
    var newLineItems: [LineItem] = [] as any;

    this.lineItems.forEach((item) => {
      if (item.sku.id !== sku.id) {
        newLineItems.push(item);
      }
    });

    this.lineItems = newLineItems;
  }

  getNumberOfItems() {
    var numberOfItems = 0;

    this.lineItems.forEach((lineItem) => {
      numberOfItems += lineItem.quantity;
    });

    return numberOfItems;
  }

  getSubtotal() {
    var subTotal = 0;

    this.lineItems.forEach((lineItem) => {
      subTotal += lineItem.totalPrice;
    });

    return subTotal;
  }

  getTax() {
    return this.getSubtotal() * 0.16;
  }

  getTotal() {
    return this.getSubtotal() + this.getTax();
  }
}

export default Cart;
