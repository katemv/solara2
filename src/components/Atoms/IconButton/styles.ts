import { css, styled } from "styled-components";

export const StyledIconButton = styled.button(({ theme }) => css`
    background: transparent;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover span {
        color: ${theme.colors.white};
    }
`);
