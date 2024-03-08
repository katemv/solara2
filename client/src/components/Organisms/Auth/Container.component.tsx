import { styled } from "styled-components";
import { Flex } from "../../Atoms/Flex/Flex.component";

export const Container = styled(Flex)(
    ({ theme }) => `
    background-image: ${theme.colors.backgroundGradient};
    height: 100%;
    overflow: auto;
    padding: 20px 15px;
`
);
