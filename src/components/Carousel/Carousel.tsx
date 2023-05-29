import React from "react";
import styled from "styled-components";
import { SlideProps } from "./Slide";

interface CarouselProps {
    children: React.ReactNode[];
}

const Wrapper = styled.div`
    
`

const Slide1 = styled.div`
    
`

const Carousel: React.FC<CarouselProps> = (props: CarouselProps) => {
    const target = React.createRef();
    // const { count } = props;

    return (
        <Wrapper>
            {props.children}
            {/* <Slide1 className="carousel-inner" role="listbox">
                <div className="item active">
                    <a href="#">Is this thing working?</a>
                </div>
            </Slide1> */}

        </Wrapper>
    );
}

export default Carousel;
