import { css, styled } from "styled-components";
import { Flex } from "../Flex/Flex.component";

export const ContainerWrap = styled(Flex)`
    width: 100%;
    padding: 80px 40px;
    justify-content: center;
`;

export const Container = styled.div(
    ({ theme }) => css`
        max-width: ${theme.maxContentWidth};
        width: 100%;
        justify-content: center;
    `
);
