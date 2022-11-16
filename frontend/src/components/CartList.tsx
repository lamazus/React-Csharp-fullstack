/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { clearCart } from "../cartSlice";
import { Page } from "../containers/Page";
import { CartItemsTable } from "./CartItemsTable";

export const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.pizzas);
  const dispatch = useAppDispatch();
  const clearCartHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    let isConfirmed = confirm("Подтвердите очистку корзины");
    if (isConfirmed === true) {
      dispatch(clearCart());
    }
  };

  return (
    <Page>
      <h2>Ваш заказ</h2>
      {cart.length > 0 ? (
        <CartItemsTable cart={cart} />
      ) : (
        <div>Корзина пуста</div>
      )}
      <ul
        css={css`
          list-style: none;
          display: flex;
          justify-content: space-between;
          a {
            border-radius: 10px;
            padding: 5px;
            text-decoration: none;
          }
        `}
      >
        <li>
          <Link
            to="/"
            css={css`
              background-color: rgb(255, 211, 69);
              color: rgb(147, 113, 0);
              border: 2px solid rgb(147, 113, 0);
            `}
          >
            &#8592; Назад в меню
          </Link>
        </li>
        {cart.length > 0 && (
          <React.Fragment>
            <li>
              <Link
                to="/cart"
                onClick={() => clearCartHandler()}
                css={css`
                  background-color: rgb(255, 129, 129);
                  color: rgb(198, 0, 0);
                  border: 2px solid rgb(198, 0, 0);
                `}
              >
                Очистить корзину
              </Link>
            </li>
            <li>
              <Link
                to="/finish"
                css={css`
                  background-color: rgb(92, 219, 80);
                  color: rgb(9, 111, 0);
                  border: 2px solid rgb(9, 111, 0);
                `}
              >
                Оформить заказ &#8594;
              </Link>
            </li>
          </React.Fragment>
        )}
      </ul>
    </Page>
  );
};
