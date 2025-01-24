import { css, styled } from "styled-components";
import Flex from "../../../Atoms/Flex/Flex.component";

export const StyledTab = styled(Flex)<{ $isActive: boolean }>(
    ({ theme, $isActive }) => css`
        border: 2px solid ${theme.colors.dark90};
        border-radius: 35px;
        height: 35px;
        padding: 0 15px;
        cursor: pointer;
        flex-shrink: 0;
        user-select: none;
        transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

        &:hover {
            border-color: ${theme.colors.purple80};
            box-shadow: ${theme.shadows.elevation1};
        }

        ${$isActive &&
        `
            background: ${theme.colors.purple80};
            border-color: ${theme.colors.purple80};
            box-shadow: ${theme.shadows.elevation2};
        `}
    `
);
