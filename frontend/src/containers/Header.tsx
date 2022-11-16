/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { primary, secondary } from "../Styles";
import cartIcon from "../images/CartIcon.svg";

import { CartItemCounter } from "../components/CartItemCounter";
import { Link } from "react-router-dom";
import React from "react";

export const Header = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          background-color: ${primary};
          color: ${secondary};
          width: 100%;
          height: 100px;
        `}
      >
        <Link
          to=""
          css={css`
            font-size: 64px;
            position: relative;
            left: 8%;
            top: 10%;
            color: ${secondary};
            text-decoration: none;
          `}
        >
          Pizzeria
        </Link>
        <Link
          to="cart"
          css={css`
            position: absolute;
            text-align: center;
            right: 8%;
            top: 54px;
            width: 150px;
            background-color: ${secondary};
            text-decoration: none;
            color: ${primary};
            border-radius: 40px;
          `}
        >
          <span>Корзина</span>
          <img
            src={cartIcon}
            alt=""
            css={css`
              vertical-align: middle;
              height: 30px;
              width: 30px;
            `}
          />

          <CartItemCounter />
        </Link>
      </div>
      <Link
        to="admin"
        css={css`
          background-color: white;
          display: block;
          text-align: center;
          width: 100%;
        `}
      >
        Переход в панель менеджера (демо-версия)
      </Link>
    </React.Fragment>
  );
};
