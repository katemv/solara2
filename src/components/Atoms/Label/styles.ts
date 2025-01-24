import { css, styled } from "styled-components";

import { ColorsKeys } from "../../../providers/theme/types/types";
import theme from "../../../providers/theme/theme";

interface ContainerProps {
    color: ColorsKeys;
}

export const Container = styled.div<ContainerProps>(({ color }) => css`
    background: ${theme.colors?.[color] || "success"};
    border-radius: 6px;
    padding: ${theme.spacings.spacing1} ${theme.spacings.spacing3};
    display: inline-block;
    width: max-content;
`);
