import { FC } from "react";

import Modal, { ModalProps } from "../../../Molecules/Modal/Modal.component";
import { convertPrice } from "../../../../utils/convertPrice";
import Button from "../../../Atoms/Button/Button.component";
import { Flex } from "../../../Atoms/Flex/Flex.component";
import image1 from "../../../../assets/images/astro.png";
import { IProduct, Nullable } from "../../../../types";
import Text from "../../../Atoms/Text/Text.component";
import { Image } from "./styles";

interface ProductDetailsModalProps extends ModalProps {
    product: Nullable<IProduct>;
}

const ProductDetailsModal: FC<ProductDetailsModalProps> = ({ visible, onClose, product }) => {
    return (
        <Modal visible={visible} onClose={onClose} maxWidth={450}>
            {product && (
                <Flex direction="column" gap="spacing2">
                    <Image src={image1} alt={product.name} />
                    <Text
                        as="p"
                        plainText={product.brand}
                        appearance="headline6"
                        color="grey60"
                        textTransform="uppercase"
                        fontWeight={300}
                        textAlign="left"
                    />
                    <Text
                        as="h3"
                        plainText="LuminaryDust - Galactic Gleam Highlighter"
                        appearance="headline4"
                        textAlign="left"
                    />
                    <Text
                        as="p"
                        plainText={`Submerge yourself in the radiance of deep space nebulae with LuminaryDust - a 
                            cosmic-inspired highlighter. Created with minerals found in the heart of distant galaxies,
                            this unique highlighter acts as a wearable homage to the beauty of the cosmos.
                        `}
                        appearance="paragraph"
                        textAlign="left"
                        fontWeight={300}
                        color="grey60"
                        marginBottom="spacing4"
                    />
                    <Text as="p" plainText={convertPrice(product.price)} textAlign="left" />
                    <Button label="messages.buy_now" />
                </Flex>
            )}
        </Modal>
    );
};

export default ProductDetailsModal;
