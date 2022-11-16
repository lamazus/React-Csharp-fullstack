import React, { useEffect, useState } from "react";
import { getItemStats } from "../../data/StatsData";
import { ItemStats } from "../../data/models";
import { Table } from "../AdminStyles";

export const ItemStatsPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<ItemStats[]>();

  useEffect(() => {
    if (loaded === false) {
      const dogetItemStats = async () => {
        let response = await getItemStats();
        setData(response);
      };

      dogetItemStats();
      setLoaded(true);
    }
  }, [loaded]);

  return (
    <div>
      {loaded === false ? (
        <h1>Loading...</h1>
      ) : (
        <Table>
          <thead>
            <th>Id</th>
            <th>Название продукции</th>
            <th>Продано штук</th>
            <th>Сумма с продаж (руб.)</th>
          </thead>
          <tbody>
            {data?.map((stats) => (
              <tr key={stats.pizzaId}>
                <td>{stats.pizzaId}</td>
                <td>{stats.pizzaName}</td>
                <td>{stats.sales}</td>
                <td>{stats.income}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
