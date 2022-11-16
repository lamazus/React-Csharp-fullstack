import React from "react";
import { Link } from "react-router-dom";
import { Page } from "../containers/Page";

export const NotFoundPage: React.FC = () => {
  return (
    <Page>
      <h2>Запрашиваемая страница не существует</h2>
      <Link to="">Вернуться на главную</Link>
    </Page>
  );
};
