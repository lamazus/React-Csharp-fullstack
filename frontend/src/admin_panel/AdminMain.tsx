import { Wrapper } from "./AdminStyles";
import { SideMenu } from "./SideMenu";
import { Outlet } from "react-router-dom";

export const AdminMain = () => {
  return (
    <Wrapper>
      <SideMenu />
      <Outlet />
    </Wrapper>
  );
};
