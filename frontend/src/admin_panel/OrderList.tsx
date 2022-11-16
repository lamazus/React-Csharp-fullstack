/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
  OrderCard,
  OrderCardContent,
  OrderCardFooter,
  OrderCardHeader,
  OrderCardSide,
} from "./AdminStyles";

import { OrderCardButton } from "./OrderCardButton";
import React, { useEffect, useState } from "react";
import {
  orderGetAll,
  orderGetFiltered,
  putNextOrderStage,
} from "../data/OrderData";
import { OrderDto } from "../data/models";

export const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<OrderDto[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [filter, setFilter] = useState<number>(-1);

  useEffect(() => {
    if (loaded === false) {
      if (filter < 0) {
        const doOrderGetAll = async () => {
          let response = await orderGetAll();
          setOrders(response);
        };

        doOrderGetAll();
        setLoaded(true);
      } else {
        const doOrderGetFiltered = async (filter: number) => {
          let response = await orderGetFiltered(filter);
          setOrders(response);
        };
        doOrderGetFiltered(Number(filter));
        setLoaded(true);
      }
    }
  }, [loaded, filter]);

  const nextOrderStage = async (orderId: number) => {
    await putNextOrderStage(orderId);
    setLoaded(false);
  };

  const filterSetHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.currentTarget.value === "default") {
      setFilter(-1);
      setLoaded(false);
    } else {
      setFilter(Number(e.currentTarget.value));
      setLoaded(false);
    }
  };

  return (
    <div
      css={css`
        text-align: center;
        width: 80%;
        overflow: scroll;
      `}
    >
      <div
        css={css`
          margin: 10px;
          padding: 10px;
        `}
      >
        Отобразить:
        <select
          defaultValue="default"
          name="filter"
          onChange={filterSetHandler}
        >
          <option value="default" selected>
            По умолчанию
          </option>
          <option value="1">Не начатые</option>
          <option value="2">В процессе готовки</option>
          <option value="3">Отправленные</option>
          <option value="4">Закрытые</option>
        </select>
      </div>
      {orders.map((order) => (
        <OrderCard key={order.orderId}>
          <OrderCardHeader>
            <h3
              css={css`
                margin-bottom: 0;
              `}
            >
              Заказ {order.orderId} - {order.stageName}
            </h3>
            <span>{`${new Date(order.dateOfPurchase).toLocaleString()}`}</span>
          </OrderCardHeader>
          <OrderCardContent>
            <OrderCardSide>
              <ul
                css={css`
                  margin: 0;
                  padding: 5px;
                  list-style: none;
                `}
              >
                <li>{order.customerName}</li>
                <li>{order.telephone}</li>
                <li>{order.deliveryAddress}</li>
                <hr
                  css={css`
                    color: #fffefe;
                  `}
                />
                <li>Сумма к оплате: {order.totalCost}р.</li>
              </ul>
            </OrderCardSide>
            <div
              css={css`
                box-shadow: 0px 0px 5px 0px #000000c2 inset;
                width: 50%;
                padding: 5px;
                height: 90%;
                overflow: auto;
                font-style: italic;
              `}
            >
              <table>
                <tbody>
                  {order.cart.map((item) => (
                    <tr>
                      <td>{item.pizzaName}</td>
                      <td>{item.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </OrderCardContent>
          <OrderCardFooter>
            {order.stageId < 4 ? (
              <OrderCardButton
                stageId={order.stageId}
                onClick={() => nextOrderStage(order.orderId)}
              />
            ) : (
              <span>Заказ закрыт</span>
            )}
          </OrderCardFooter>
        </OrderCard>
      ))}
    </div>
  );
};
