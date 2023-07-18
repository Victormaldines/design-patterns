import { ECommerceShoppingCart } from './shopping-cart/e-commerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'product1', price: 50 });
shoppingCart.addProduct({ name: 'product2', price: 50 });
shoppingCart.addProduct({ name: 'product2', price: 50 });
console.log(shoppingCart.getTotalWithDiscount());
console.log(shoppingCart.getTotal());
