import type { Meta, StoryObj } from "@storybook/react";
import ListGroup from "./ListGroup";
import React from "react";
import ListGroupItem, { ListGroupItemProps } from "./ListGroupItem";

const meta: Meta<typeof ListGroup> = {
  title: "Components/ListGroup",
  component: ListGroup,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "List of ListGroupItem components.",
      control: {
        disable: true,
      },
    },
    showActive: {
      description: "Whether to show active state.",
      type: { name: "boolean", required: false },
      defaultValue: { summary: false },
    },
    hover: {
      description: "Whether to show hover state.",
      type: { name: "boolean", required: false },
      defaultValue: { summary: false },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const tempListItems = [
  {
    text: "Item 1",
  },
  {
    text: "Item 2",
    active: true,
  },
  {
    text: "Item 3",
  },
  {
    text: "Item 4",
  },
  {
    text: "Item 5",
  },
  {
    text: "Item 6",
  },
  {
    text: "Item 7",
  },
];
export const ListGroupStory: Story = {
  args: {
    children: tempListItems.map((item) => (
      <ListGroupItem
      // onClick={(event) => {
      //   console.log(event?.target);
      // }}
      >
        {item.text}
      </ListGroupItem>
    )),
  },
  // args: {
  //   children: [],
  // },
};
