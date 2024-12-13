import { css, styled } from "styled-components";
import Flex from "../../../Atoms/Flex/Flex.component";

export const StyledProduct = styled(Flex)<{ $horizontal?: boolean }>(
    ({ theme, $horizontal }) => css`
        background: ${theme.colors.dark90};
        padding: ${theme.spacings.spacing3};
        padding-bottom: ${$horizontal ?
            theme.spacings.spacing3 :
            theme.spacings.spacing4};
        border-radius: 10px;
        width: 300px;
        flex-direction: ${$horizontal ? "row" : "column"};
        gap: ${$horizontal ? theme.spacings.spacing3 : theme.spacings.spacing1};
        cursor: pointer;
        box-shadow: ${theme.shadows.elevation1};
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
            box-shadow: ${theme.shadows.elevation3};
        }
    `
);

export const ImageContainer = styled.div<{ $horizontal?: boolean }>(
    ({ theme, $horizontal }) => css`
        border-radius: 10px;
        width: ${$horizontal ? "120px" : "100%"};
        height: ${$horizontal ? "120px" : "250px"};
        margin-bottom: ${$horizontal ? 0 : theme.spacings.spacing3};
        position: relative;
        overflow: hidden;
    `
);

export const Image = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;
