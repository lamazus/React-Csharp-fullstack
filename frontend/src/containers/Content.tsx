import { MainWindow } from "../Styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export const Content = ({ children }: Props) => {
  return <MainWindow>{children}</MainWindow>;
};
