import React from 'react';
import styled from 'styled-components';
//import styled from 'styled-components';

interface ModalProps {
    toggle: () => void;
    isOpen: boolean;
}

const OuterDiv = styled.div`
    z-index: 999999;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`
const InnerDiv = styled.div`
    display: block;
    background: white;
    width: 70%;
    height: 70%;
    padding: 1rem;
    border-radius: 1.5rem;
`

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const { toggle, isOpen } = props;
    return (
        <>
            {isOpen &&
                <OuterDiv onClick={toggle}>
                    <InnerDiv onClick={(e) => e.stopPropagation()}>
                        Hello
                    </InnerDiv>
                </OuterDiv>
            }
        </>
    );
}

export default Modal;
