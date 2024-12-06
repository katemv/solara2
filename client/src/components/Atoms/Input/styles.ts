import { css, styled } from "styled-components";
import Flex from "../Flex/Flex.component";
import Icon from "../Icon/Icon.component";

export const StyledInput = styled.input<{ iconType?: string }>(
    ({ theme, iconType }) => css`
        color: ${theme.colors.white};
        background: ${theme.colors.black90};
        border-radius: 10px;
        padding: ${iconType ? `0 ${theme.spacings.spacing4} 0 ${theme.spacings.spacing7}` : `0 ${theme.spacings.spacing4}`};
        width: 100%;
        height: 100%;
        background: ${theme.colors.black90};
    `
);

export const Container = styled(Flex)`
    height: 50px;
    position: relative;
`;

export const StyledIcon = styled(Icon)(({ theme }) => css`
    position: absolute;
    left: ${theme.spacings.spacing3};
`);