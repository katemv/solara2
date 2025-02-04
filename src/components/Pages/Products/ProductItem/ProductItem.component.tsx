import { FC } from "react";

import { convertPrice } from "../../../../utils/convertPrice";
import { Product } from "../../../../generated/graphql";
import Text from "../../../Atoms/Text/Text.component";
import Flex from "../../../Atoms/Flex/Flex.component";

import { ImageContainer, StyledProduct, Image } from "./styles";

export interface ProductItemProps {
    product: Product;
    horizontal?: boolean;
    onClick: () => void;
    testId?: string;
}

const ProductItem: FC<ProductItemProps> = ({ product, horizontal, onClick, testId = "product-item" }) => {
    return (
        <StyledProduct
            $horizontal={horizontal}
            onClick={onClick}
            testId={testId}
        >
            <ImageContainer $horizontal={horizontal}>
                <Image src={product.imageUrl} alt={product.title} />
            </ImageContainer>
            <Flex direction="column" gap="spacing1" justify="space-around">
                <Text
                    as="p"
                    plainText={product.brand}
                    appearance="headline6"
                    color="dark20"
                    textTransform="uppercase"
                    fontWeight={300}
                />
                <Text
                    as="h6"
                    plainText={product.title}
                    appearance="headline4"
                    marginBottom="spacing2"
                    style={{ fontSize: horizontal ? 14 : 16 }}
                />
                <Text
                    as="h6"
                    plainText={convertPrice(product.price)}
                    appearance="headline4"
                    color="blue80"
                />
            </Flex>
        </StyledProduct>
    );
};

export default ProductItem;
