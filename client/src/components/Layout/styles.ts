import { css, styled } from "styled-components";
import { Flex } from "../Flex/Flex.component";

export const Header = styled.header`
    height: 80px;
    padding: 0 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Nav = styled.nav(
    ({ theme }) => css`
        display: flex;
        gap: ${theme.spacings.spacing5};
    `
);

export const Menu = styled.ul(
    ({ theme }) => css`
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: ${theme.spacings.spacing4};
    `
);

export const HeaderContainer = styled(Flex)(
    ({ theme }) => css`
        max-width: ${theme.maxContentWidth};
    `
);
