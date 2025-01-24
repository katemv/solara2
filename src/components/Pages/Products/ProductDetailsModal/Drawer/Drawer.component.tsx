import { FC } from "react";

import IconButton from "../../../../Atoms/IconButton/IconButton.component";
import { productDetailsDrawerText } from "../../../../../utils/mocks";
import Markdown from "../../../../Atoms/Markdown/Markdown.component";
import Flex from "../../../../Atoms/Flex/Flex.component";
import Text from "../../../../Atoms/Text/Text.component";
import { Nullable } from "../../../../../types";

import { Container } from "./styles";

export enum DrawerState {
    Details = "product_details",
    Shipping = "shipping_information",
    Returns = "returns",
    Reviews = "reviews",
}

export interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    drawerState: Nullable<DrawerState>;
    testId?: string;
}


const Drawer: FC<DrawerProps> = ({ isOpen, onClose, drawerState, testId = "drawer" }) => (
    <Container transform={isOpen ? "0" : "100"} direction="column" testId={testId}>
        <Flex marginBottom="spacing5" justify="space-between" align="center">
            <IconButton
                iconType="arrow_back"
                testId="close-drawer"
                onClick={onClose}
            />
            <Text
                intlKey={drawerState ? `pages.shop.${drawerState}` : "pages.shop.product_details"}
                appearance="headline4"
                textTransform="capitalize"
                testId="drawer-heading"
            />
            <div style={{ width: 30 }} />
        </Flex>

        <Flex direction="column" gap="spacing2" style={{ overflowX: "auto" }}>
            {(drawerState === DrawerState.Details ||
                drawerState === DrawerState.Shipping ||
                drawerState === DrawerState.Returns) && (
                <Markdown>{productDetailsDrawerText[drawerState]}</Markdown>
            )}
        </Flex>
    </Container>
);

export default Drawer;
