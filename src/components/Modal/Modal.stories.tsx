import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import useModal from "./useModal";
import { Button } from "../../stories/Button";

const Component = () => {
  const { isOpen, toggle } = useModal();
  return (
    <div>
      <Modal isOpen={isOpen} toggle={toggle}>
        This is a Modal
      </Modal>
      <Button label="Open" onClick={toggle} />
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: "Example/Modal",
  component: Component,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  args: {},
};
