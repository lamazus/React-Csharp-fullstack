export interface Order {
  customerName: string;
  telephone: string;
  deliveryAddress: string;
  totalCost: number;
  cart: any[];
}

export interface PizzaInCart {
  pizzaId: number;
  pizzaName: string;
  price: number;
  imgName?: string;
  amount?: number;
}
export interface Pizza {
  pizzaId: number;
  pizzaName: string;
  ingredients: string;
  price: number;
  imgName: string;
}

export interface OrderDto {
  orderId: number;
  customerName: string;
  telephone: string;
  deliveryAddress: string;
  totalCost: number;
  dateOfPurchase: Date;
  stageId: number;
  stageName: string;
  cart: PizzaInCartDto[];
}

export interface PizzaInCartDto {
  pizzaName: string;
  amount: number;
}

export interface AverageTicket {
  year: number;
  month: string;
  avgTicket: number;
}

export interface CountCustomers {
  year: number;
  month: string;
  customers: number;
}
export interface ItemsPerTicket {
  year: number;
  month: string;
  avgItems: number;
}
export interface ItemStats {
  pizzaId: number;
  pizzaName: string;
  income: string;
  sales: number;
}
