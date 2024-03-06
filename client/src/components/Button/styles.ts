import styled, { css } from "styled-components";

import Icon from "../Icon/Icon.component";
import { ButtonStyleProps } from "./Button.component";

export const StyledButton = styled.button<ButtonStyleProps>(
    ({ theme, fullWidth, disabled, loading }) => css`
        height: 50px;
        background: ${theme.colors.purple80};
        width: ${fullWidth ? "100%" : "auto"};
        border-radius: 10px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: ${theme.spacings.spacing2};

        &:hover,
        &:active {
            background: ${theme.colors.purple100};
        }

        &:hover {
            cursor: pointer;
        }

        ${disabled &&
        `
        background: ${theme.colors.grey60};
    `}

        ${loading &&
        `
        background: ${theme.colors.purple80};
        
        &:hover, &:active {
            background: ${theme.colors.purple80};
            cursor: default;
        }
    `}
    `
);

export const SpinIcon = styled(Icon)`
    animation-name: spin;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
`;
