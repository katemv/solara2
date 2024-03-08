import { css, styled } from "styled-components";

export const fullWidth = {
    gridColumn: "1 / -1",
};

export const Grid = styled.div(
    ({ theme }) => css`
        max-width: ${theme.maxContentWidth};
        width: 100%;
        display: grid;
        grid-gap: ${theme.spacings.spacing5};
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;

        & [data-full-width="true"] {
            grid-column: 1 / -1;
        }
    `
);
