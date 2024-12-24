import { CSSProperties, FC, HTMLAttributes, JSX } from "react";
import { useIntl } from "react-intl";

import { ColorsKeys, SpacingKeys, TypographyKeys } from "../../../providers/theme/types/types";
import { StyledText } from "./styles";

type BaseTextProps = Partial<TextStyleProps> & HTMLAttributes<HTMLDivElement>;

export interface TextProps extends BaseTextProps {
    as?: keyof JSX.IntrinsicElements;
    intlKey?: string;
    plainText?: string;
    customStyles?: CSSProperties;
}

export interface TextStyleProps {
    $appearance: TypographyKeys;
    color?: ColorsKeys;
    textAlign: "left" | "right" | "center" | "justify";
    fontWeight: number;
    textTransform: "uppercase" | "none" | "capitalize";
    $marginBottom: SpacingKeys | 0;
    style: CSSProperties;
    textWrap?: "balance" | "pretty";
    values: Record<string, string | number>;
}

const Text: FC<TextProps> = ({
    as = "p",
    intlKey,
    values,
    plainText = "",
    fontWeight = 0,
    $appearance = "paragraph",
    color = "white",
    textAlign = "center",
    textTransform = "none",
    $marginBottom = 0,
    textWrap = "balance",
    customStyles = {}
}) => {
    const { formatMessage } = useIntl();

    return (
        <StyledText
            as={as}
            $appearance={$appearance}
            color={color}
            fontWeight={fontWeight}
            style={customStyles}
            $textTransform={textTransform}
            $marginBottom={$marginBottom}
            $textAlign={textAlign}
            $textWrap={textWrap}
        >
            {intlKey ? formatMessage({ id: intlKey }, values) : plainText}
        </StyledText>
    );
};

export default Text;
