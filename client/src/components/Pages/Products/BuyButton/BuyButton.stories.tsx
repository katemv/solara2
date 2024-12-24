import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import BuyButton from "./BuyButton.component";

const meta = {
    title: "Pages/Product/BuyButton",
    component: BuyButton
} satisfies Meta<typeof BuyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BuyButtonStories: Story = {
    args: {
        price: 100,
        onClick: fn(),
        loading: false,
        $fullWidth: false,
        disabled: false,
        loadingLabel: "Work in progress...",
        type: "button"
    }
};
