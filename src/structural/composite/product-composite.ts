// Component
export abstract class ProductComponent {
  abstract getPrice(): number;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

// Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Composite
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((acc, child) => acc + child.getPrice(), 0);
    // let total = 0;
    // for (const child of this.children) {
    //   total += child.getPrice();
    // }
    // return total;
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex === -1) return;
    this.children.splice(productIndex, 1);
  }
}

// Client
const pen = new ProductLeaf('pen', 1);
const smartphone = new ProductLeaf('smartphone', 1_000);
const tShirt = new ProductLeaf('t-shirt', 40);
const productBox = new ProductComposite();

productBox.add(pen, smartphone, tShirt);

const tablet = new ProductLeaf('tablet', 2_000);
const kindle = new ProductLeaf('kindle', 300);
const anotherProductBox = new ProductComposite();

anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);
console.log(productBox.getPrice());
