import { css, styled } from "styled-components";

import { InputProps } from "./Input.component";

export const StyledInput = styled.input<
    Omit<InputProps, "placeholderIntlKey" | "onChange">
>(
    ({ theme, fullWidth }) => css`
        height: 50px;
        width: ${fullWidth ? "100%" : "auto"};
        border-radius: 10px;
        padding: 0 20px;
        background: ${theme.colors.black90};
    `
);
