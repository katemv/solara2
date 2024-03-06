import { styled } from "styled-components";

export const LogoImage = styled.div(
    ({ theme }) => `
    background: ${theme.colors.purple100};
    height: 8px;
    width: 8px;
    position: relative;
    left: -5px;
`
);
