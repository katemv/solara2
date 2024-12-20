import { css, styled } from "styled-components";
import Flex from "../Flex/Flex.component";


export const Container = styled(Flex)(({ theme }) => css`
    padding: ${theme.spacings.spacing4} 0;
    border-top: 1px solid ${theme.colors.dark95};
    cursor: pointer;
    
    &:last-child {
        border-bottom: 1px solid ${theme.colors.dark95};
    }
    
    &:hover p {
        color: ${theme.colors.white};
    }
    
    &:hover .material-symbols-outlined {
        color: ${theme.colors.dark20};
    }
`);
