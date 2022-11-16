import { Order, OrderDto } from "./models";

export const orderGetAll = async () => {
  const response = await fetch("https://localhost:7261/api/order")
    .then((response) => response.json())
    .then((response) => response as OrderDto[]);

  return response;
};

export const orderGetFiltered = async (filter: number) => {
  const response = await fetch(
    `https://localhost:7261/api/order/filtered?filter=${filter}`
  )
    .then((response) => response.json())
    .then((response) => response as OrderDto[]);

  return response;
};
export const orderPost = async ({
  customerName,
  telephone,
  deliveryAddress,
  cart,
}: Order) => {
  const response = await fetch("https://localhost:7261/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      customerName,
      telephone,
      deliveryAddress,
      cart,
    }),
  });

  console.log(response.ok);
  console.log(response.json());
};

export const putNextOrderStage = async (id: number) => {
  const response = await fetch(`https://localhost:7261/api/order?id=${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf8",
    },
  });

  console.log(response.ok);
};
