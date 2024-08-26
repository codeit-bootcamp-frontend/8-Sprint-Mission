import Link from "next/link";
import styled from "styled-components";

type LinkButtonProps = {
  radius?: boolean;
  isDisabled?: boolean;
};

export const Button = styled.button`
  width: 130px;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gray100-color);
  background-color: var(--blue-color);
`;

export const LinkButton = styled(Link)<LinkButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 50px;
  border: none;
  border-radius: ${(props) => (props.radius ? "40px" : "8px")};
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--gray100-color);
  background-color: var(--blue-color);
`;
