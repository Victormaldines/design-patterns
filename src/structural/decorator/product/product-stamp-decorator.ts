import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  getName() {
    return `${this.product.getName()} (stamped)`;
  }

  getPrice() {
    return this.product.getPrice() + 10;
  }
}
