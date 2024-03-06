import { css, styled } from "styled-components";
import { Flex } from "../Flex/Flex.component";

export const Card = styled(Flex)(
    ({ theme }) => css`
        background: ${theme.colors.dark};
        padding: ${theme.spacings.spacing6} ${theme.spacings.spacing5};
        border-radius: 20px;
        box-shadow: ${theme.shadows.elevation0};
        width: 400px;
        min-height: 540px;

        @media (max-width: 500px) {
            width: auto;
            min-width: 400px;
            min-height: 400px;
        }
    `
);
