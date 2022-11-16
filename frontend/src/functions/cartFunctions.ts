import { PizzaInCart } from "../data/models";
import {} from "../data/PizzaData";

export const calculateTotalPrice = (cart: PizzaInCart[]) => {
  let total = 0;
  cart.forEach((item) => (total += item.price * item.amount!));
  return total;
};
