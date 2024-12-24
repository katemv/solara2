import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./MenuItem.component";

const meta = {
    title: "Atoms/MenuItem",
    component: MenuItem,
    args: {
        intlKey: "pages.shop.product_details",
        iconKey: "book",
        fullWidth: true
    },
    decorators: (Story) => (
        <div style={{ width: "300px" }}>
            <Story />
        </div>
    )
} satisfies Meta<typeof MenuItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MenuItemStories: Story = {};
