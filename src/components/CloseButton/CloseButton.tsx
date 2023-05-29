import React from "react";
import styled from "styled-components";

interface CloseButtonProps {
  onClose: () => void;
}

const StyledButton = styled.button`
  position: absolute;
  background-color: white;
  border: 0;
  padding: 0.25rem 0.5rem;
  &:hover {
    cursor: pointer;
    background-color: #772424;
    border: 1px solid #ddd;
    color: #ddd;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const CloseButton: React.FC<CloseButtonProps> = (props: CloseButtonProps) => {
  const { onClose } = props;
  return (
    <Wrapper>
      <StyledButton onClick={onClose}>X</StyledButton>
    </Wrapper>
  );
};

export default CloseButton;
