/**@jsxExportSource @emotion/react */
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: rgb(245, 244, 255);
  height: 100%;
  width: 100%;
  display: flex;
`;

export const NavBar = styled.div`
  list-style: none;
  width: 20%;
  text-align: left;
  background-color: rgb(64, 65, 83);
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding-left: 20px;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    color: rgb(151, 154, 206);
    text-decoration: underline;
  }
`;

export const StatsNavSubMenu = styled.ul``;

export const OrderCard = styled.div`
  background-color: rgb(223, 223, 223);
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
  height: 300px;
  width: 310px;
  display: inline-block;
  font-size: 14px;
  vertical-align: middle;
`;
export const OrderCardHeader = styled.div`
  text-align: center;
  margin-bottom: 5px;
`;
export const OrderCardSide = styled.div``;
export const OrderCardContent = styled.div`
  display: flex;
  height: 65%;
`;
export const OrderCardFooter = styled.div`
  text-align: center;
`;

export const Table = styled.table`
  margin: 10px;
  padding: 10px;
  border-collapse: collapse;
  border-spacing: 5px;
  * {
    border: 1px solid;
    padding: 5px;
  }

  th {
    text-align: center;
  }

  td {
    height: 25px;
  }
`;
