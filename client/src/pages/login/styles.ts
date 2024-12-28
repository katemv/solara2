import { css, styled } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)(({ theme }) => css`
    width: max-content;
    padding: ${theme.spacings.spacing2} ${theme.spacings.spacing4};
    align-self: center;
`);

export const StyledForm = styled.form(({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.spacing2};
`);
