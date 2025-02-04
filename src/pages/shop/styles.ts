import { css, styled } from "styled-components";

export const fullWidth = {
    gridColumn: "1 / -1"
};

export const Grid = styled.div(
    ({ theme }) => css`
        display: grid;
        justify-content: center;
        grid-gap: ${theme.spacings.spacing5};
        grid-template-columns: repeat(auto-fit, 300px);

        & [data-full-width="true"] {
            grid-column: 1 / -1;
        }
    `
);
