/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { CartItem } from "./CartItem";
import { PizzaInCart } from "../data/models";
import { calculateTotalPrice } from "../functions/cartFunctions";

interface Props {
  cart: PizzaInCart[];
}
export const CartItemsTable: React.FC<Props> = ({ cart }: Props) => {
  // eslint-disable-next-line no-empty-pattern

  return (
    <React.Fragment>
      <table
        css={css`
          width: 100%;
          border-collapse: collapse;
        `}
      >
        <tbody>
          {cart.map((pizza) => (
            <CartItem
              key={pizza.pizzaName}
              name={pizza.pizzaName}
              imgName={pizza.imgName}
              price={pizza.price}
              amount={pizza.amount}
            />
          ))}
        </tbody>
      </table>
      <span>
        <b>Итоговая сумма: {calculateTotalPrice(cart)}</b>
      </span>
    </React.Fragment>
  );
};
