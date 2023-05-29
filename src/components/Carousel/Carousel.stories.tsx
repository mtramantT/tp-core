import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Carousel from "./Carousel";
import Slide from "./Slide";

export const CarouselStory = () => {

    return (
        <div>
            <Carousel>
                <Slide>
                    <div>
                        Now We're Cookin'
                    </div>
                </Slide>
                <Slide>
                    <div>
                        Now We're Cookin' 2
                    </div>
                </Slide>
                <Slide>
                    <div>
                        Now We're Cookin' 3
                    </div>
                </Slide>
                <Slide>
                    <div>
                        Now We're Cookin' 4
                    </div>
                </Slide>
            </Carousel>
        </div>
    )

};

const meta: Meta<typeof CarouselStory> = {
    title: 'Example/Carousel',
    component: CarouselStory,
    tags: ['autodocs'],
    argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;