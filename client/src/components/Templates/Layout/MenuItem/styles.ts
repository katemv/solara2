import { css, styled } from "styled-components";

export const StyledMenuItem = styled.li<{ $isActive: boolean }>(
    ({ theme, $isActive }) => css`
        position: relative;
        & span {
            font-variation-settings: "wght" 300;
        }

        &:hover::after {
            content: "";
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: ${theme.colors.purple80};
        }

        ${$isActive &&
        `
            &::after {
                content: "";
                display: block;
                position: absolute;
                height: 2px;
                width: 100%;
                background: ${theme.colors.purple80};
            }
        `}
    `
);
