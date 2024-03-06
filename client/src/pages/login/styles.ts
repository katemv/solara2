import { styled } from "styled-components";
import { Flex } from "../../components/Flex/Flex.component";

export const Container = styled(Flex)(
    ({ theme }) => `
    background-image: ${theme.colors.backgroundGradient};
    height: 100%;
    overflow: auto;
    padding: 20px 15px;
`
);

export const Logo = styled.div(
    ({ theme }) => `
    background: ${theme.colors.purple100};
    height: 8px;
    width: 8px;
    position: relative;
    left: -5px;
`
);
