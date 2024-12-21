import { css, styled } from "styled-components";

import Flex from "../../../../Atoms/Flex/Flex.component";

export const Container = styled(Flex)<{ transform: string }>(({ theme, transform }) => css`
    height: 100%;
    width: 100%;
    background: ${theme.colors.dark95};
    transition: transform 0.3s ease-in-out;
    transform: translateX(${transform}%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: ${theme.spacings.spacing5};
`);
