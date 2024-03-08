import { FC, HTMLAttributes, JSX } from "react";
import { useIntl } from "react-intl";

import { ColorsKeys, SpacingKeys, TypographyKeys } from "../../../providers/theme/types/types";
import { StyledText } from "./styles";

type BaseTextProps = Partial<TextStyleProps> & HTMLAttributes<HTMLDivElement>;

export interface TextProps extends BaseTextProps {
    as: keyof JSX.IntrinsicElements;
    intlKey?: string;
    plainText?: string;
    customStyles?: Record<string, any>;
}

export interface TextStyleProps {
    appearance: TypographyKeys;
    color: ColorsKeys;
    textAlign: "left" | "right" | "center";
    fontWeight: number;
    textTransform: "uppercase" | "none";
    marginBottom: SpacingKeys | 0;
    style: Record<string, any>;
}

const Text: FC<TextProps> = ({
    as,
    intlKey,
    plainText = "",
    fontWeight = 0,
    appearance = "paragraph",
    color = "white",
    textAlign = "center",
    textTransform = "none",
    marginBottom = 0,
    customStyles = {},
}) => {
    const { formatMessage } = useIntl();

    return (
        <StyledText
            as={as}
            appearance={appearance}
            color={color}
            fontWeight={fontWeight}
            style={customStyles}
            $textTransform={textTransform}
            $marginBottom={marginBottom}
            $textAlign={textAlign}
        >
            {intlKey ? formatMessage({ id: intlKey }) : plainText}
        </StyledText>
    );
};

export default Text;
