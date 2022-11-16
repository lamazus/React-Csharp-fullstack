import React, { useEffect, useState } from "react";
import { getAverageTicket } from "../../data/StatsData";
import { AverageTicket } from "../../data/models";
import { Table } from "../AdminStyles";

export const AverageTicketPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<AverageTicket[]>();

  useEffect(() => {
    if (loaded === false) {
      const doGetAverageTicket = async () => {
        let response = await getAverageTicket();
        setData(response);
      };

      doGetAverageTicket();
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
            <th>Средний чек (руб.)</th>
          </thead>
          <tbody>
            {data?.map((stats) => (
              <tr key={stats.year}>
                <td>{stats.year}</td>
                <td>{stats.month}</td>
                <td>{stats.avgTicket}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
