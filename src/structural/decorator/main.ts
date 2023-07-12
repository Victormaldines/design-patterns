import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const customizedTShirt = new ProductCustomizationDecorator(tShirt);

console.log(tShirt.getName(), tShirt.getPrice());
console.log(tShirtWithStamp.getName(), tShirtWithStamp.getPrice());
console.log(customizedTShirt.getName(), customizedTShirt.getPrice());
