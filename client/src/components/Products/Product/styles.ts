import { css, styled } from "styled-components";
import { Flex } from "../../Flex/Flex.component";

export const StyledProduct = styled(Flex)(
    ({ theme }) => css`
        background: ${theme.colors.dark90};
        padding: ${theme.spacings.spacing3};
        padding-bottom: ${theme.spacings.spacing4};
        border-radius: 10px;
        width: 300px;
        flex-direction: column;
        gap: ${theme.spacings.spacing1};
        cursor: pointer;
        transition: box-shadow 0.2s ease-in-out;

        &:hover {
            box-shadow: ${theme.shadows.elevation3};
        }
    `
);

export const ImageContainer = styled.div(
    ({ theme }) => css`
        border-radius: 10px;
        width: 100%;
        height: 250px;
        margin-bottom: ${theme.spacings.spacing3};
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
