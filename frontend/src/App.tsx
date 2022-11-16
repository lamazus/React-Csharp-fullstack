import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";
import { Cart } from "./components/CartList";
import { PizzaList } from "./components/PizzaList";
import { Order } from "./components/Order";
import { NotFoundPage } from "./components/NotFoundPage";

import { AdminMain } from "./admin_panel/AdminMain";
import { OrderList } from "./admin_panel/OrderList";
import { AverageTicketPage } from "./admin_panel/stats/AverageTicketPage";
import { CountCustomersPage } from "./admin_panel/stats/CountCustomersPage";
import { ItemStatsPage } from "./admin_panel/stats/ItemStatsPage";
import { ItemsPerTicketPage } from "./admin_panel/stats/ItemsPerTicketPage";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<PizzaList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="finish" element={<Order />} />
            <Route path="admin" element={<AdminMain />}>
              <Route path="orders" element={<OrderList />} />
              <Route
                path="stats/items-per-ticket"
                element={<ItemsPerTicketPage />}
              />
              <Route
                path="stats/average-ticket"
                element={<AverageTicketPage />}
              />
              <Route
                path="stats/count-customers"
                element={<CountCustomersPage />}
              />
              <Route path="stats/items-stats" element={<ItemStatsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
