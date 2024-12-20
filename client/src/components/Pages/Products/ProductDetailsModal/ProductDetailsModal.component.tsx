import { FC } from "react";

import DoubleButton from "../../../Atoms/DoubleButton/DoubleButton.component";
import Modal, { ModalProps } from "../../../Molecules/Modal/Modal.component";
import Reviews from "../../../Molecules/Reviews/Reviews.component";
import MenuItem from "../../../Atoms/MenuItem/MenuItem.component";
import { convertPrice } from "../../../../utils/convertPrice";
import image1 from "../../../../assets/images/astro.png";
import Label from "../../../Atoms/Label/Label.component";
import { IProduct, Nullable } from "../../../../types";
import Icon from "../../../Atoms/Icon/Icon.component";
import Flex from "../../../Atoms/Flex/Flex.component";
import Text from "../../../Atoms/Text/Text.component";

import { Image } from "./styles";

export interface ProductDetailsModalProps extends ModalProps {
    product: Nullable<IProduct>;
}

const ProductDetailsModal: FC<ProductDetailsModalProps> = ({ visible, onClose, product }) => {
    return (
        <Modal
            visible={visible}
            onClose={onClose}
            maxWidth={450}
            fixedButton={(
                <DoubleButton
                    fullWidth
                    label="messages.buy_now"
                    leftContent={(
                        <Flex direction="column">
                            <Text
                                as="span"
                                plainText={product ? convertPrice(product.price) : ""}
                                textAlign="left"
                                fontWeight={600}
                            />
                            <Text
                                as="span"
                                intlKey="pages.shop.unit_price"
                                textAlign="left"
                                appearance="small"
                                color="dark10"
                            />
                        </Flex>
                    )}
                />
            )}
        >
            {product && (
                <Flex direction="column">
                    <Image src={image1} alt={product.name} />
                    <Text
                        as="p"
                        plainText={product.brand}
                        appearance="headline6"
                        color="dark60"
                        textTransform="uppercase"
                        fontWeight={700}
                        textAlign="left"
                        marginBottom="spacing1"
                    />
                    <Text
                        as="h3"
                        plainText={product.name}
                        appearance="headline2"
                        textAlign="left"
                        marginBottom="spacing4"
                    />
                    <Flex marginBottom="spacing6" justify="space-between">
                        <Label intlKey="pages.shop.available" />
                        <Flex gap="spacing1" align="center">
                            <Icon type="star" filled color="warning" size={17} />
                            <Text plainText="4.6" />
                            <Text plainText="(120 Reviews)" fontWeight={700} color="dark60" />
                        </Flex>
                    </Flex>
                    <Text
                        as="h3"
                        intlKey="pages.shop.product_info"
                        appearance="headline5"
                        textAlign="left"
                        marginBottom="spacing3"
                        color="dark10"
                    />
                    <Text
                        as="p"
                        plainText={product.description}
                        appearance="paragraph"
                        fontWeight={400}
                        color="dark60"
                        marginBottom="spacing5"
                        textAlign="left"
                    />
                    <div>
                        <MenuItem iconKey="book" intlKey="pages.shop.product_details" />
                        <MenuItem iconKey="local_shipping" intlKey="pages.shop.shipping_information" />
                        <MenuItem iconKey="undo" intlKey="pages.shop.returns" marginBottom="spacing5" />
                    </div>
                    <Reviews rating={4.6} marginBottom="spacing5" />
                    <MenuItem iconKey="comment" intlKey="pages.shop.reviews" />
                </Flex>
            )}
        </Modal>
    );
};

export default ProductDetailsModal;
