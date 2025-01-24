import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { productMock } from "../../../../utils/mocks";

import ProductItem from "./ProductItem.component";


const meta = {
    title: "Pages/Product/Product Item",
    component: ProductItem
} satisfies Meta<typeof ProductItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductItemStory: Story = {
    args: {
        product: productMock,
        onClick: fn(),
        horizontal: false
    }
};
