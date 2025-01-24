import { css, styled } from "styled-components";
import Flex from "../../Atoms/Flex/Flex.component";

export const Container = styled(Flex)(({ theme }) => `
    background-image: ${theme.colors.backgroundGradient};
    height: 100%;
    overflow: auto;
    padding: 20px 15px;
`);

export const Card = styled(Flex)(({ theme }) => css`
    background: ${theme.colors.dark100};
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
`);
