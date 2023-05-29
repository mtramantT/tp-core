import React from 'react';
import styled from 'styled-components';

export interface SlideProps {
    children: React.ReactNode;
}

const Wrapper = styled.div``;

const Slide: React.FC<SlideProps> = (props: SlideProps) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
}

export default Slide;
