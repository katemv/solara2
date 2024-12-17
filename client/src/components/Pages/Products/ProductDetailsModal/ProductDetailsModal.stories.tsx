import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { ProductProps } from "../ProductItem/ProductItem.component";
import ProductDetailsModal from "./ProductDetailsModal.component";
import image1 from "../../../../assets/images/abstr_asto.png";
import Button from "../../../Atoms/Button/Button.component";

const meta = {
    title: "Pages/Product/Product Details Modal",
    component: ProductDetailsModal
} satisfies Meta<typeof ProductDetailsModal>;

export default meta;

type Story = StoryObj<ProductProps>;

function ProductDetailsModalComponent () {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <Button label="Open modal" onClick={() => setVisible(true)} />
            <ProductDetailsModal
                product={{
                    name: "Test product",
                    brand: "Luna",
                    id: "1",
                    price: 800,
                    image: image1
                }}
                visible={visible}
                onClose={() => setVisible(false)}
            />
        </>
    );
}

export const ProductDetailsModalStory: Story = {
    render: ProductDetailsModalComponent
};
