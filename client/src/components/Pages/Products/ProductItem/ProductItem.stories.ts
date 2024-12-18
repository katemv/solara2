import type { Meta, StoryObj } from "@storybook/react";

import ProductItem from "./ProductItem.component";
import image1 from "../../../../assets/images/abstr_asto.png";
import { fn } from "@storybook/test";


const meta = {
    title: "Pages/Product/Product Item",
    component: ProductItem
} satisfies Meta<typeof ProductItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductItemStory: Story = {
    args: {
        product: {
            name: "Test product",
            brand: "Luna",
            id: "1",
            price: 800,
            image: image1
        },
        onClick: fn(),
        horizontal: false
    }
};
