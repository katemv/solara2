import { css, styled } from "styled-components";

import { DoubleButtonProps } from "./DoubleButton.component";
import Flex from "../Flex/Flex.component";

export const StyledButton = styled.button<Omit<DoubleButtonProps, "leftContent" | "label">>(
    ({ theme, fullWidth, disabled, loading }) => css`
        height: 70px;
        background-color: ${theme.colors.purple80};
        width: ${fullWidth ? "100%" : "auto"};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: ${theme.spacings.spacing2};
        transition: background-color 0.2s ease-in-out;

        &:active {
            background: ${theme.colors.purple100};
        }

        &:hover {
            cursor: pointer;
        }

        ${loading && `
            background: ${theme.colors.purple80};

            &:hover, &:active {
                background: ${theme.colors.purple80};
                cursor: default;
            }
        `}

        ${disabled && `
                background: ${theme.colors.dark90};

                &:hover, &:active {
                    background: ${theme.colors.dark90};
                    cursor: default;
            }
        `}
    `
);

export const RightContent = styled(Flex)(({ theme }) => css`
    background: ${theme.colors.purple100};
    height: 100%;
    border-radius: 0 10px 10px 0;
    padding: 0 ${theme.spacings.spacing7};
`);

export const LeftContent = styled(Flex)(({ theme }) => css`
    padding: 0 ${theme.spacings.spacing5};
    min-width: 180px;
`);
