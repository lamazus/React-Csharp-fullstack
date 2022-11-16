import React, { useEffect, useState } from "react";
import { getCountCustomers } from "../../data/StatsData";
import { CountCustomers } from "../../data/models";
import { Table } from "../AdminStyles";

export const CountCustomersPage: React.FC = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [data, setData] = useState<CountCustomers[]>();

  useEffect(() => {
    if (loaded === false) {
      const dogetCountCustomers = async () => {
        let response = await getCountCustomers();
        setData(response);
      };

      dogetCountCustomers();
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
            <th>Кол-во покупателей</th>
          </thead>
          <tbody>
            {data?.map((stats) => (
              <tr key={stats.year}>
                <td>{stats.year}</td>
                <td>{stats.month}</td>
                <td>{stats.customers}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
