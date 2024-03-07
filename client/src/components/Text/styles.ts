import styled, { css } from "styled-components";

import { TextStyleProps } from "./Text.component";

export const StyledText = styled.div<TextStyleProps>(
    ({
        theme,
        appearance,
        color,
        textAlign,
        fontWeight,
        textTransform,
        marginBottom,
    }) => css`
        font-size: ${theme.typography[appearance].fontSize};
        font-variation-settings: "wght"
            ${theme.typography[appearance].fontWeight};
        line-height: ${theme.typography[appearance].lineHeight};
        color: ${theme.colors[color]};
        text-transform: ${textTransform};
        text-align: ${textAlign};
        ${appearance === "logo" && "font-family: 'Bebas Neue', sans-serif;"}
        ${fontWeight !== 0 && `font-variation-settings: 'wght' ${fontWeight};`}
        ${marginBottom !== 0 &&
        `margin-bottom: ${theme.spacings[marginBottom]};`}
        text-wrap: balance;
    `
);
