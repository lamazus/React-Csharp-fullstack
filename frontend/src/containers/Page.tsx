import React from "react";
import { Content } from "./Content";
import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

export const Page: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <Content children={children} />
    </div>
  );
};
