import { css, styled } from "styled-components";

export const Image = styled.img(
    ({ theme }) => css`
        width: 400px;
        height: 400px;
        border-radius: 10px;
        margin-bottom: ${theme.spacings.spacing3};
    `
);
