import { FC, HTMLAttributes, JSX } from "react";
import { useIntl } from "react-intl";

import { ColorsKeys, TypographyKeys } from "../../providers/theme/types/types";
import { StyledText } from "./styles";

type BaseTextProps = Partial<TextStyleProps> & HTMLAttributes<HTMLDivElement>;

export interface TextProps extends BaseTextProps {
    as: keyof JSX.IntrinsicElements;
    intlKey: string;
}

export interface TextStyleProps {
    appearance: TypographyKeys;
    color: ColorsKeys;
    bold: boolean;
    textAlign: "left" | "right" | "center";
}

const Text: FC<TextProps> = ({
    as,
    intlKey,
    appearance = "paragraph",
    color = "white",
    bold = false,
    textAlign = "center",
}) => {
    const { formatMessage } = useIntl();

    return (
        <StyledText
            as={as}
            appearance={appearance}
            color={color}
            bold={bold}
            textAlign={textAlign}
        >
            {formatMessage({ id: intlKey })}
        </StyledText>
    );
};

export default Text;
