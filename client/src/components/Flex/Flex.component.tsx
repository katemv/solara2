import { HTMLAttributes } from "react";
import { css, styled } from "styled-components";
import { SpacingKeys } from "../../providers/theme/types/types";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
    justify?: "start" | "end" | "center" | "space-between" | "space-around";
    align?: "start" | "end" | "center" | "space-between" | "space-around";
    direction?: "row" | "column";
    wrap?: boolean;
    gap?: SpacingKeys;
    marginBottom?: SpacingKeys;
    fullWidth?: boolean;
    fullHeight?: boolean;
}

export const Flex = styled.div<FlexProps>`
    ${({ justify, align, direction, wrap, gap, marginBottom, fullWidth, fullHeight, theme }) => css`
        display: flex;
        justify-content: ${justify};
        align-items: ${align};
        flex-direction: ${direction};
        flex-wrap: ${wrap ? "wrap" : "nowrap"};
        margin-bottom: ${marginBottom ? theme.spacings[marginBottom] : "0"};
        width: ${fullWidth ? "100%" : "auto"};
        height: ${fullHeight ? "100%" : "auto"};
        ${gap && `gap: ${theme.spacings[gap]};`}
    `}
`;
