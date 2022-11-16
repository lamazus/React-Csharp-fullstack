import React, { useEffect, useState } from "react";
import { getItemsPerTicket } from "../../data/StatsData";
import { ItemsPerTicket } from "../../data/models";
import { Table } from "../AdminStyles";

export const ItemsPerTicketPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<ItemsPerTicket[]>();

  useEffect(() => {
    if (loaded === false) {
      const dogetItemsPerTicket = async () => {
        let response = await getItemsPerTicket();
        setData(response);
      };

      dogetItemsPerTicket();
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
            <th>Год</th>
            <th>Месяц</th>
            <th>Среднее кол-во позиций в чеке (шт.)</th>
          </thead>
          <tbody>
            {data?.map((stats) => (
              <tr key={stats.year}>
                <td>{stats.year}</td>
                <td>{stats.month}</td>
                <td>{stats.avgItems}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
