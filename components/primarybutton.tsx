import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: ReactNode;
}

export default function PrimaryButton({ children }: ButtonProps) {
  return <Button>{children}</Button>;
}

const Button = styled.button`
  background-color: #3692ff;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
  border: none;
`;

//   .off {
//     background-color: #ffffff;
//     color: #4b5563;
//     font-size: 18px;
//     font-weight: 700;
//   }

//   .on {
//     background-color: #ffffff;
//     color: #3692ff;
//     font-size: 18px;
//     font-weight: 700;
//   }

//   .disable {
//     background-color: #9ca3af;
//     color: #ffffff;
//   }

//   .inquiry {
//     width: 74px;
//     align-self: flex-end;
//   }
