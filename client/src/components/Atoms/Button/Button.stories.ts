import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button.component";

const meta = {
    title: "Atoms/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        fullWidth: { control: "boolean" },
        disabled: { control: "boolean" },
        loading: { control: "boolean" },
        loadingLabel: { control: "text" },
        appearance: {
            control: "inline-radio",
            options: ["default", "secondary"],
        },
        type: {
            control: "select",
            options: ["submit", "button"],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Primary",
    },
};

export const Secondary: Story = {
    args: {
        label: "Secondary",
        appearance: "secondary",
    },
};

export const Loading: Story = {
    args: {
        label: "Loading",
        loadingLabel: "Work in progress...",
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        disabled: true,
    },
};
