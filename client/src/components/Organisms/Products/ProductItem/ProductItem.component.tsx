import { FC } from "react";

import { convertPrice } from "../../../../utils/convertPrice";
import Text from "../../../Atoms/Text/Text.component";
import { IProduct } from "../../../../types";

import image1 from "../../../../assets/images/astro.png";
import image2 from "../../../../assets/images/bar.png";
import image3 from "../../../../assets/images/abstr_asto.png";
import image4 from "../../../../assets/images/flower_asto_2.png";
import image5 from "../../../../assets/images/planet.png";

import { ImageContainer, StyledProduct, Image } from "./styles";
import Flex from "../../../Atoms/Flex/Flex.component";

const images = [image1, image2, image3, image4, image5];

const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export interface ProductProps {
    product: IProduct;
    horizontal?: boolean;
    onClick: () => void;
}

const ProductItem: FC<ProductProps> = ({ product, horizontal, onClick }) => {
    return (
        <StyledProduct $horizontal={horizontal} onClick={onClick}>
            <ImageContainer $horizontal={horizontal}>
                <Image src={images[getRandomNumber(0, 4)]} alt={product.name} />
            </ImageContainer>
            <Flex direction="column" gap="spacing1" justify="space-around">
                <Text
                    as="p"
                    plainText={product.brand}
                    appearance="headline6"
                    color="dark20"
                    textTransform="uppercase"
                    fontWeight={300}
                    textAlign="left"
                />
                <Text as="h6" plainText={product.name} appearance="headline4" textAlign="left" />
                <Text
                    as="h6"
                    plainText={convertPrice(product.price)}
                    appearance="headline4"
                    textAlign="left"
                    color="blue80"
                />
            </Flex>
        </StyledProduct>
    );
};

export default ProductItem;
