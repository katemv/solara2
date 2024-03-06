import Text from "../Text/Text.component";
import { Flex } from "../Flex/Flex.component";
import { LogoImage } from "./styles";

const Logo = () => {
    return (
        <Flex
            gap="spacing3"
            align="start"
            justify="end"
            marginBottom="spacing6"
        >
            <Text
                as="h2"
                intlKey="solara"
                appearance="logo"
                textAlign="right"
            />
            <LogoImage />
        </Flex>
    );
};

export default Logo;
