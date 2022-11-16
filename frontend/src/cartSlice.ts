import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "./data/models";
import { PizzaInCart } from "./data/models";

interface CartState {
  pizzas: PizzaInCart[];
}

const initialState: CartState = {
  pizzas: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pizza>) => {
      let entityIndex = state.pizzas.findIndex(
        (pizza) => pizza.pizzaName === action.payload.pizzaName
      );
      if (entityIndex === -1) {
        state.pizzas.push({
          pizzaId: action.payload.pizzaId,
          pizzaName: action.payload.pizzaName,
          price: action.payload.price,
          imgName: action.payload.imgName,
        });
        state.pizzas[state.pizzas.length - 1].amount = 1;
      } else {
        state.pizzas[entityIndex].amount! += 1;
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      let entityIndex = state.pizzas.findIndex(
        (pizza) => pizza.pizzaName === action.payload
      );
      if (entityIndex !== -1) {
        state.pizzas[entityIndex].amount! -= 1;
        if (state.pizzas[entityIndex].amount === 0) {
          state.pizzas.splice(entityIndex, 1);
        }
      }
    },
    amountPlus: (state, action: PayloadAction<string>) => {
      let entityIndex = state.pizzas.findIndex(
        (pizza) => pizza.pizzaName === action.payload
      );
      state.pizzas[entityIndex].amount! += 1;
    },
    amountMinus: (state, action: PayloadAction<string>) => {
      let entityIndex = state.pizzas.findIndex(
        (pizza) => pizza.pizzaName === action.payload
      );
      state.pizzas[entityIndex].amount! -= 1;
    },
    clearCart: (state) => {
      state.pizzas.splice(0, state.pizzas.length);
    },
  },
});

export const { addItem, removeItem, amountPlus, amountMinus, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
