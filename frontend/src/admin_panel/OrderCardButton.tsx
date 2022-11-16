/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React from "react";

interface Props {
  stageId: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const OrderCardButton: React.FC<Props> = ({
  stageId,
  onClick,
}: Props) => {
  let buttonColor = "";
  let action = "";
  let hoverColor = "";
  let activeColor = "";

  switch (stageId) {
    case 1:
      buttonColor = "#a22d2d";
      hoverColor = "#d23a3a";
      activeColor = "#772020";
      action = "Начать готовку";
      break;
    case 2:
      buttonColor = "#e67512";
      hoverColor = "#f70";
      activeColor = "#bd5800";
      action = "Передать курьеру";
      break;
    case 3:
      buttonColor = "#48b332";
      hoverColor = "#4cd230";
      activeColor = "#2f821d";
      action = "Завершить заказ";
      break;
  }

  return (
    <button
      onClick={onClick}
      css={css`
        color: white;
        background-color: ${buttonColor};
        border: 0;
        border-radius: 10px;
        font-size: 18px;
        padding: 10px;
        :hover {
          background-color: ${hoverColor};
        }
        :active {
          background-color: ${activeColor};
        }
      `}
    >
      {action}
    </button>
  );
};
