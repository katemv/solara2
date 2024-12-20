import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import image1 from "../../../../assets/images/abstr_asto.png";

import ProductDetailsModal, { ProductDetailsModalProps } from "./ProductDetailsModal.component";

const meta = {
    title: "Pages/Product/Product Details Modal",
    component: ProductDetailsModal,
    tags: ["!autodocs"]
} satisfies Meta<typeof ProductDetailsModal>;

export default meta;

type Story = StoryObj<ProductDetailsModalProps>;

export const ProductDetailsModalStory: Story = {
    args: {
        product: {
            name: "CosMoss Explorer",
            brand: "Luna",
            description: `
                Embark on a journey through the uncharted realms of the cosmos with the CosmoMoss Explorer!
                Perfect for space enthusiasts and dreamers alike.
            `,
            id: "1",
            price: 800,
            image: image1
        },
        visible: true,
        onClose: fn()
    }
};
