import { FC } from "react";

import { ColorsKeys } from "../../../providers/theme/types/types";
import Text from "../Text/Text.component";

import { Container } from "./styles";

interface LabelProps {
    intlKey?: string;
    color?: ColorsKeys;
}

const Label: FC<LabelProps> = ({ intlKey, color = "success" }) => (
    <Container color={color}>
        <Text intlKey={intlKey} appearance="small" />
    </Container>
);

export default Label;
