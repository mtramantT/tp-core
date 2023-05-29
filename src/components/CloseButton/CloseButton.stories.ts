import type { Meta, StoryObj } from '@storybook/react';
import CloseButton from './CloseButton';

const meta: Meta<typeof CloseButton> = {
    title: 'Example/CloseButton',
    component: CloseButton,
    tags: ['autodocs'],
    argTypes: {},
};

type Story = StoryObj<typeof meta>;

export const CloseButtonStory: Story = {
    args: {},
};

export default meta;
