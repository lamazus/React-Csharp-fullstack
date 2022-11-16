import {
  ItemsPerTicket,
  AverageTicket,
  CountCustomers,
  ItemStats,
} from "./models";

export const getItemsPerTicket = async () => {
  var response = await fetch(
    "https://localhost:7261/api/statistic/items-per-ticket"
  )
    .then((response) => response.json())
    .then((response) => response as ItemsPerTicket[]);

  return response;
};

export const getAverageTicket = async () => {
  var response = await fetch(
    "https://localhost:7261/api/statistic/average-ticket"
  )
    .then((response) => response.json())
    .then((response) => response as AverageTicket[]);

  return response;
};
export const getCountCustomers = async () => {
  var response = await fetch(
    "https://localhost:7261/api/statistic/count-customers"
  )
    .then((response) => response.json())
    .then((response) => response as CountCustomers[]);

  return response;
};
export const getItemStats = async () => {
  var response = await fetch("https://localhost:7261/api/statistic/items-stats")
    .then((response) => response.json())
    .then((response) => response as ItemStats[]);

  return response;
};
