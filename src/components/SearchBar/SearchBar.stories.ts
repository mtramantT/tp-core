import { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
    title: "Example/SearchBar",
    component: SearchBar,
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBarStory: Story = {
};
