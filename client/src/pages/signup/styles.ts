import { css, styled } from "styled-components";

export const StyledForm = styled.form(({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.spacing2};
`);
