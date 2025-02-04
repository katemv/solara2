import { FunctionComponent } from "react";

import { Product as ProductDocument } from "../../../../generated/graphql";
import Product from "../ProductItem/ProductItem.component";
import { fullWidth } from "../../../../pages/shop/styles";
import Text from "../../../Atoms/Text/Text.component";
import { Nullable } from "../../../../types";

export interface ProductCategoryProps {
    category: Nullable<string>;
    products: ProductDocument[];
    onProductSelected: (productId: string) => void;
}

const ProductCategory: FunctionComponent<ProductCategoryProps> = ({ category, products, onProductSelected }) => (
    <>
        <Text
            as="h2"
            intlKey={category || "categories.all_products"}
            appearance="headline2"
            testId="title"
            style={fullWidth}
        />
        <Text
            as="p"
            intlKey={`${category || "categories.all_products"}_description`}
            appearance="paragraph"
            fontWeight={300}
            color="dark20"
            testId="description"
            style={{ ...fullWidth, width: "80%" }}
            marginBottom="spacing4"
        />
        {products.map((product) => (
            <Product
                key={product.id}
                testId={`product-item-${product.id}`}
                product={product}
                onClick={() => onProductSelected(product.id)}
            />
        ))}
    </>
);

export default ProductCategory;
