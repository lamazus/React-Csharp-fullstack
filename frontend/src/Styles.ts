/**@jsxImportSource @emotion/react */
import styled from "@emotion/styled";

//
// Colors
//

export const primary = "rgb(156, 46, 46)";
export const secondary = "rgb(255, 201, 140)";

//
// Wrapper
//
export const MainWindow = styled.div`
  margin: 10px;
  padding: 10px;
  width: 84%;
  position: absolute;
  left: 8%;
  top: 150px;
  text-align: center;
  background-color: rgba(255, 201, 140, 0.8);
  border-radius: 20px;
`;

//
// Item Card styles
//
export const CardButton = styled.button`
  padding: 5px;
  margin-top: 10px;
  background-color: ${primary};
  color: white;
  font-size: 16px;
  border-radius: 15px;
  border: 1px solid white;
  cursor: pointer;
`;

export const CardLabel = styled.label`
  font-size: 30px;
  font-weight: 100;
  margin: 0 5px;
`;

export const CardContent = styled.div`
  position: relative;
  display: inline-table;
  width: 235px;
  height: 360px;
  border: 5px;
  margin: 5px;
  padding: 5px;
  font-size: 14px;
`;

export const CardFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 14px;
`;

//
//Order styles
//
export const OrderForm = styled.form`
  text-align: left;
  * {
    margin-top: 5px;
    display: block;
  }
  input {
    width: 50%;
    border-radius: 5px;
  }
  button {
    margin-top: 30px;
    height: 40px;
    width: 120px;
    font-size: 20px;
    background-color: ${secondary};
    color: ${primary};
    border: 1px solid ${primary};
    border-radius: 10px;
    :hover {
      background-color: rgb(255, 216, 171);
    }
    :active {
      background-color: ${primary};
      border: 1px solid ${secondary};
      color: ${secondary};
    }
  }
  span {
    font-size: 13px;
    color: red;
  }
`;
