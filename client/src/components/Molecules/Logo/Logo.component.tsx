import { FC } from "react";

import { Flex, FlexProps } from "../../Atoms/Flex/Flex.component";
import Text from "../../Atoms/Text/Text.component";
import { LogoImage } from "./styles";

const Logo: FC<FlexProps> = (props) => {
    return (
        <Flex {...props} gap="spacing3" align="start" justify="end">
            <Text as="h2" intlKey="solara" appearance="logo" textAlign="right" />
            <LogoImage />
        </Flex>
    );
};

export default Logo;
