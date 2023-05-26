import React, { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

const ModalOverlay = styled.div`
  z-index: 100;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalBody = styled.div`
  display: block;
  background: white;
  width: 70%;
  height: 70%;
  padding: 1rem;
  border-radius: 1rem;
`;

const Modal: React.FC<Props> = (props: Props) => {
  const { children, isOpen, toggle } = props;
  return (
    <>
      {isOpen && (
        <ModalOverlay onClick={toggle}>
          <ModalBody>{children}</ModalBody>
        </ModalOverlay>
      )}
    </>
  );
};

export default Modal;
