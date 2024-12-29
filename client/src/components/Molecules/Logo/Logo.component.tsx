import { FC } from "react";

import { SpacingKeys } from "../../../providers/theme/types/types";
import Flex, { FlexProps } from "../../Atoms/Flex/Flex.component";
import Text from "../../Atoms/Text/Text.component";
import { LogoImage } from "./styles";

interface LogoProps {
    mode?: "dark" | "light";
    marginBottom?: SpacingKeys;
    alignSelf?: FlexProps["alignSelf"];
    testId?: string;
}

const Logo: FC<LogoProps> = ({ mode = "light", marginBottom, alignSelf = "start", testId = "logo" }) => {
    return (
        <Flex
            marginBottom={marginBottom}
            gap="spacing3"
            align="start"
            justify="end"
            alignSelf={alignSelf}
            testId={testId}
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
