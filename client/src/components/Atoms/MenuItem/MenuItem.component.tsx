import { FC } from "react";

import { IconKeys } from "../../../providers/theme/types/types";
import Flex, { FlexProps } from "../Flex/Flex.component";
import Text from "../Text/Text.component";
import Icon from "../Icon/Icon.component";

import { Container } from "./styles";

interface MenuItemProps extends FlexProps {
    intlKey: string;
    iconKey: IconKeys;
    onClick?: () => void;
}

const MenuItem: FC<MenuItemProps> = ({ intlKey, onClick, iconKey, ...rest }) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container fullWidth justify="space-between" align="center" {...rest}>
        <Flex gap="spacing3">
            <Icon type={iconKey} color="dark40" />
            <Text
                onClick={onClick}
                intlKey={intlKey}
                appearance="paragraph"
                fontWeight={400}
                color="dark20"
                textTransform="capitalize"
                customStyles={{ lineHeight: "1.6" }}
            />
        </Flex>
        <Icon size={20} type="arrow_forward_ios" />
    </Container>
);

export default MenuItem;
