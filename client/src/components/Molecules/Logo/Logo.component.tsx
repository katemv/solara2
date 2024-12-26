import { FC } from "react";

import { SpacingKeys } from "../../../providers/theme/types/types";
import Flex from "../../Atoms/Flex/Flex.component";
import Text from "../../Atoms/Text/Text.component";
import { LogoImage } from "./styles";

interface LogoProps {
    mode?: "dark" | "light";
    marginBottom?: SpacingKeys;
}

const Logo: FC<LogoProps> = ({ mode = "light", marginBottom }) => {
    return (
        <Flex
            marginBottom={marginBottom}
            gap="spacing3"
            align="start"
            justify="end"
            testId="container"
        >
            <Text
                as="h2"
                intlKey="solara"
                color={mode === "dark" ? "dark80" : "white" }
                appearance="logo"
                textAlign="right"
            />
            <LogoImage />
        </Flex>
    );
};

export default Logo;
