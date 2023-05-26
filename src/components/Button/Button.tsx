import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label?: string;
  children?: string;
  primary?: boolean;
  backgroundColor?: string;
}

const StyledButton = styled.button<{
  isPrimary?: boolean;
}>`
  border: 0;
  border-radius: 0.25em;
  font-weight: 700;
  line-height: 1;
  display: inline-block;
  background-color: ${({ isPrimary }) =>
    isPrimary ? "rgb(43, 71, 92)" : "rgb(187, 174, 157)"};
  color: #ddd;
  padding: 0.5em 1em;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, children, primary, backgroundColor } = props;

  return (
    <StyledButton
      isPrimary={primary}
      style={{ backgroundColor: backgroundColor }}
    >
      {label || children || ""}
    </StyledButton>
  );
};

export default Button;
