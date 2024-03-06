import { css, styled } from "styled-components";

import { Flex } from "../Flex/Flex.component";

export const Card = styled(Flex)(
    ({ theme }) => css`
        background: ${theme.colors.dark};
        padding: ${theme.spacings.spacing6} ${theme.spacings.spacing5};
        border-radius: 20px;
        box-shadow: ${theme.shadows.elevation0};
        max-width: 400px;
    `
);
