/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { CardButton } from "../Styles";
import { amountPlus, amountMinus, removeItem } from "../cartSlice";
import { useAppDispatch } from "../hooks";
import React from "react";

interface Props {
  name: string;
  price: number;
  imgName?: string;
  amount?: number;
}

export const CartItem: React.FC<Props> = ({
  name,
  price,
  imgName,
  amount,
}: Props) => {
  const dispatch = useAppDispatch();

  const removeItemHandler = (name: string) => {
    // eslint-disable-next-line no-restricted-globals
    let isConfirmed = confirm(`Подтвердите удаление ${name}`);
    if (isConfirmed === true) {
      dispatch(removeItem(name));
    }
  };

  return (
    <tr
      key={name}
      css={css`
        border: 1px solid black;
      `}
    >
      <td
        css={css`
          width: 35%;
        `}
      >
        <img
          src={require(`../images/pizzas/${imgName}`)}
          alt=""
          css={css`
            width: 150px;
            height: 150px;
          `}
        />
      </td>
      <td
        css={css`
          width: 20%;
        `}
      >
        {name}
      </td>
      <td
        css={css`
          width: 10%;
        `}
      >
        {price * amount!}р.
      </td>
      <td
        css={css`
          width: 25%;
        `}
      >
        {amount! <= 1 ? (
          <CardButton onClick={() => removeItemHandler(name)}>
            Удалить
          </CardButton>
        ) : (
          <CardButton
            onClick={() => dispatch(amountMinus(name))}
            css={css`
              width: 30px;
              height: 30px;
              border-radius: 50%;
            `}
          >
            -
          </CardButton>
        )}
        <label
          css={css`
            padding: 0 5px;
          `}
        >
          {amount}шт.
        </label>
        <CardButton
          onClick={() => dispatch(amountPlus(name))}
          css={css`
            width: 30px;
            height: 30px;
            border-radius: 50%;
          `}
        >
          +
        </CardButton>
      </td>
    </tr>
  );
};
