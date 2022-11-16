import { useEffect, useState } from "react";
import { Page } from "../containers/Page";
import { Pizza } from "../data/models";
import { pizzaGetAll } from "../data/PizzaData";
import { PizzaItem } from "./PizzaItem";

export const PizzaList: React.FC = () => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded === false) {
      const doPizzaGetAll = async () => {
        const response = await pizzaGetAll();
        setPizzas(response);
      };

      doPizzaGetAll();
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <Page>
      {pizzas.map((pizza) => (
        <PizzaItem key={pizza.pizzaId} pizza={pizza} />
      ))}
    </Page>
  );
};
