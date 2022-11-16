/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import {
  primary,
  CardContent,
  CardFooter,
  CardButton,
  CardLabel,
} from "../Styles";

import { useAppDispatch, useAppSelector } from "../hooks";
import { addItem, removeItem } from "../cartSlice";
import { Pizza } from "../data/models";

interface Props {
  pizza: Pizza;
}

export const PizzaItem: React.FC<Props> = ({ pizza }: Props) => {
  const cart = useAppSelector((state) => state.cart.pizzas);
  const dispatch = useAppDispatch();

  const addItemToCartHandler = (pizza: Pizza) => {
    dispatch(addItem(pizza));
    console.log(cart);
  };

  const removeItemFromCartHandler = () => {
    dispatch(removeItem(pizza.pizzaName));
    console.log(cart);
  };

  const getAmount = (name: string) => {
    let entity = cart.find((pizza) => pizza.pizzaName === name);
    if (entity?.amount! > 0) {
      return entity?.amount;
    } else return 0;
  };
  let amount: React.ReactNode = getAmount(pizza.pizzaName);

  return (
    <CardContent key={pizza.pizzaId}>
      <img
        src={require(`../images/pizzas/${pizza.imgName}`)}
        alt=""
        css={css`
          height: 150px;
          width: 150px;
          border: 2px solid ${primary};
          border-radius: 20px;
          transition: 0.3s;
          :hover {
            transform: scale(1.5);
            box-shadow: 16px 16px 7px 0px rgba(0, 0, 0, 0.2);
          }
        `}
      />
      <div>
        <h4
          css={css`
            margin-bottom: 0;
          `}
        >
          {pizza.pizzaName}
        </h4>
        <p
          css={css`
            margin-top: 5px;
            font-weight: lighter;
            font-style: italic;
          `}
        >
          {pizza.ingredients}
        </p>
      </div>

      <CardFooter>
        <span
          css={css`
            margin-bottom: 5px;
            font-size: 25px;
            display: block;
          `}
        >
          {pizza.price}р.
        </span>
        {amount! > 0 && (
          <React.Fragment>
            <CardButton onClick={removeItemFromCartHandler}>Убрать</CardButton>
            <CardLabel>{amount}</CardLabel>
          </React.Fragment>
        )}
        <CardButton onClick={() => addItemToCartHandler(pizza)}>
          Добавить
        </CardButton>
      </CardFooter>
    </CardContent>
  );
};
