import { css, styled } from "styled-components";

export const Image = styled.img(
    ({ theme }) => css`
        width: 100%;
        height: 362px;
        border-radius: 10px;
        margin-bottom: ${theme.spacings.spacing5};
        object-fit: cover;
    `
);
