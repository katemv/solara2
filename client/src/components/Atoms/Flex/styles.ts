import { SpacingKeys } from "../../../providers/theme/types/types";
import { css, styled } from "styled-components";

export interface StyledProps {
    $justify?: "start" | "end" | "center" | "space-between" | "space-around";
    $align?: "start" | "end" | "center" | "space-between" | "space-around" | "baseline";
    $alignSelf?: "start" | "end" | "center";
    direction?: "row" | "column";
    $wrap?: boolean;
    $gap?: SpacingKeys;
    $marginBottom?: SpacingKeys;
    $fullWidth?: boolean;
    $fullHeight?: boolean;
}

export const StyledFlex = styled.div<StyledProps>`
    ${({
        $justify,
        $align,
        $alignSelf,
        direction,
        $wrap,
        $gap,
        $marginBottom,
        $fullWidth,
        $fullHeight,
        theme
    }) => css`
        display: flex;
        justify-content: ${$justify};
        align-items: ${$align};
        align-self: ${$alignSelf};
        flex-direction: ${direction};
        flex-wrap: ${$wrap ? "wrap" : "nowrap"};
        margin-bottom: ${$marginBottom ? theme.spacings[$marginBottom] : "0"};
        width: ${$fullWidth ? "100%" : "auto"};
        height: ${$fullHeight ? "100%" : "auto"};
        ${$gap && `gap: ${theme.spacings[$gap]};`}
    `}
`;
