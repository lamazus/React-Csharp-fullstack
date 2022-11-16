import { Pizza } from "./models";

export const pizzaGetAll = async () => {
  let pizzaList = await fetch("https://localhost:7261/api/pizza")
    .then((response) => response.json())
    .then((response) => response as Pizza[]);

  return pizzaList;
};
