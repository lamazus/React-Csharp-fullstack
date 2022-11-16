/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { primary } from "../Styles";
import { useAppSelector } from "../hooks";
import React from "react";

export const CartItemCounter: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.pizzas);

  let total: number = 0;
  cart.map((pizza) => (total += pizza.amount!));

  return (
    <React.Fragment>
      {total > 0 && (
        <span
          css={css`
            background: white;
            border: 1px solid ${primary};
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: inline-block;
          `}
        >
          {total}
        </span>
      )}
    </React.Fragment>
  );
};
