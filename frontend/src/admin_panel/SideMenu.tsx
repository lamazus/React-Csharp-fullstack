/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { NavLink } from "react-router-dom";
import { NavBar, NavLinks } from "./AdminStyles";
export const SideMenu = () => {
  return (
    <NavBar>
      <NavLinks>
        <li>
          <NavLink to="orders">Заказы</NavLink>
        </li>
        <li>
          <li
            css={css`
              color: white;
            `}
          >
            Статистика
          </li>

          <ul
            css={css`
              padding-left: 5px;
              list-style: disc inside;
              color: white;
              font-size: 15px;
            `}
          >
            <li>
              <NavLink to="stats/items-per-ticket">
                Среднее количество позиций в чеке
              </NavLink>
            </li>
            <li>
              <NavLink to="stats/average-ticket">Средний чек</NavLink>
            </li>
            <li>
              <NavLink to="stats/count-customers">
                Количество покупателей
              </NavLink>
            </li>
            <li>
              <NavLink to="stats/items-stats">Статистика по продукции</NavLink>
            </li>
          </ul>
        </li>
      </NavLinks>
    </NavBar>
  );
};
