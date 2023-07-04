import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((acc, meal) => meal.getPrice() + acc, 0);
  }

  add(...meals: MealCompositeProtocol[]): void {
    meals.forEach((meal) => this._children.push(meal));
  }
}
