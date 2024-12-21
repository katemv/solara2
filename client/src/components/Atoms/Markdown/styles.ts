import { css, styled } from "styled-components";
import Markdown from "react-markdown";

import { ColorsKeys } from "../../../providers/theme/types/types";

export const StyledMarkdown = styled(Markdown)<{ color: ColorsKeys }>(({ theme, color }) => css`
    color: ${theme.colors[color]};
    font-size: 14px;
    line-height: 1.4;
    text-wrap: pretty;
    font-variation-settings: 'wght' 400;

    & strong {
        font-variation-settings: 'wght' 700;
        color: ${theme.colors.dark40};
    }
`);
