import React, { useState } from "react";
import { OrderForm } from "../Styles";
import { orderPost } from "../data/OrderData";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "../hooks";
import { clearCart } from "../cartSlice";
import { Link } from "react-router-dom";
import { Page } from "../containers/Page";
import { calculateTotalPrice } from "../functions/cartFunctions";

type Inputs = {
  name: string;
  telephone: string;
  address: string;
};

export const Order: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.pizzas);
  const dispatch = useAppDispatch();
  const [isSubmited, setSubmited] = useState(false);
  const totalCost = calculateTotalPrice(cart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    orderPost({
      customerName: data.name,
      telephone: data.telephone,
      deliveryAddress: data.address,
      totalCost: totalCost,
      cart: cart,
    });
    dispatch(clearCart());
    setSubmited(true);
  };

  return (
    <Page>
      {isSubmited ? (
        <p>
          <h3>
            Благодарим за то, что выбрали нас. В ближайшее время с вами свяжутся
            для уточнения деталей.
          </h3>
          <Link to="/">Вернуться на главную</Link>
        </p>
      ) : (
        <React.Fragment>
          <h4>Для продолжения необходимо заполнить все поля </h4>
          <OrderForm onSubmit={handleSubmit(onSubmit)}>
            <label>Как к вам обращаться</label>
            <input
              {...register("name", { required: "Укажите ваше имя" })}
              placeholder="Александр"
            />
            <span>{errors.name?.message}</span>
            <label>Контактный номер</label>
            <input
              {...register("telephone", {
                required: "Укажите номер телефона",
                pattern: {
                  value: /((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}/,
                  message: "Введите корректный номер (7XXXXXXXXXX)",
                },
              })}
              placeholder="7XXXXXXXXXX"
            />
            <span>{errors.telephone?.message}</span>
            <label>Адрес</label>
            <input
              {...register("address", { required: "Введите адрес доставки" })}
              placeholder="Москва, Красная пл., 1"
            />
            <span>{errors.address?.message}</span>
            <button>Отправить</button>
          </OrderForm>
        </React.Fragment>
      )}
    </Page>
  );
};
