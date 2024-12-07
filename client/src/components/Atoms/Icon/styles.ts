import { css, styled } from "styled-components";
import { ColorsKeys } from "../../../providers/theme/types/types";

export const StyledIcon = styled.span<{ color: ColorsKeys }>(({ theme, color }) => css`
    font-variation-settings:
        "FILL" 0,
        "wght" 400,
        "GRAD" 0,
        "opsz" 24;
      color: ${theme?.colors?.[color] || "black"};
`);
