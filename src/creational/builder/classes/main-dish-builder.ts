import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Rice, Beans, Meat, Beverage, Dessert } from './rice';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  reset(): this {
    this._meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('rice', 5);
    const beans = new Beans('beans', 10);
    const meat = new Meat('beef', 20);

    this._meal.add(rice, beans, meat);

    return this;
  }

  makeBeverage(): this {
    const beverage = new Beverage('wine', 3.5);

    this._meal.add(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('coxinha', 5);

    this._meal.add(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this._meal;
  }

  getPrice(): number {
    return this._meal.getPrice();
  }
}
