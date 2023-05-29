import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import React from "react";
import { Button } from "../../stories/Button";


export const ModalStory = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button label={"Click Me"} onClick={toggle}></Button>
            <Modal toggle={toggle} isOpen={isOpen} />
        </div>
    )
};

const meta: Meta<typeof ModalStory> = {
    title: 'Example/Modal',
    component: ModalStory,
    tags: ['autodocs'],
    argTypes: {},
};

type Story = StoryObj<typeof meta>;

export default meta;
