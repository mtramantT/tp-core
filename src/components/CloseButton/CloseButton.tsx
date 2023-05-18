import React from "react";
import styled from "styled-components";

interface CloseButtonProps {}

const StyledButton = styled.button`
  box-sizing: border-box;
  background-color: white;
  border: 0;
  padding: 0.25rem 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #f00;
    border: 1px solid #ddd;
  }
`;

const CloseButton: React.FC<CloseButtonProps> = (props: CloseButtonProps) => {
  const {} = props;
  return <StyledButton>X</StyledButton>;
};

export default CloseButton;
