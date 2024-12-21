import styled, { css } from "styled-components";

import { TextStyleProps } from "./Text.component";
import { ColorsKeys, SpacingKeys } from "../../../providers/theme/types/types";

type StyledTextProps = Pick<TextStyleProps, "appearance" | "fontWeight"> & {
    $textAlign?: "left" | "right" | "center" | "justify";
    $textTransform?: "uppercase" | "none" | "capitalize";
    $marginBottom?: SpacingKeys | 0;
    $textWrap?: "balance" | "pretty";
    color: ColorsKeys;
};
export const StyledText = styled.div<StyledTextProps>(
    ({ theme, appearance, color, $textAlign, fontWeight, $textTransform, $marginBottom, $textWrap }) => css`
        font-size: ${theme.typography[appearance].fontSize};
        font-variation-settings: "wght" ${theme.typography[appearance].fontWeight};
        line-height: ${theme.typography[appearance].lineHeight};
        color: ${theme?.colors?.[color] || "black"};
        text-transform: ${$textTransform};
        text-align: ${$textAlign};
        ${appearance === "logo" && "font-family: 'Bebas Neue', sans-serif;"}
        ${fontWeight !== 0 && `font-variation-settings: 'wght' ${fontWeight};`}
        ${$marginBottom && `margin-bottom: ${theme.spacings[$marginBottom]};`}
        text-wrap: ${$textWrap};
    `
);
