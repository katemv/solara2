import { css, styled } from "styled-components";

export const Grid = styled.div(
    ({ theme }) => css`
        max-width: ${theme.maxContentWidth};
        width: 100%;
        display: grid;
        grid-gap: ${theme.spacings.spacing5};
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;
    `
);
