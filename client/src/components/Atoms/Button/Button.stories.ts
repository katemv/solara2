import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button from "./Button.component";

const meta = {
    title: "Atoms/Button",
    component: Button,
    argTypes: {
        $fullWidth: { control: "boolean" },
        disabled: { control: "boolean" },
        $loading: { control: "boolean" },
        loadingLabel: { control: "text" },
        $appearance: {
            control: "inline-radio",
            options: ["default", "secondary"]
        },
        type: {
            control: "select",
            options: ["submit", "button"]
        }
    },
    args: {
        onClick: fn(),
        $fullWidth: false,
        disabled: false,
        $loading: false,
        loadingLabel: "Work in progress..",
        $appearance: "primary",
        type: "button"
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
    args: {
        label: "pages.login.signup"
    }
};
