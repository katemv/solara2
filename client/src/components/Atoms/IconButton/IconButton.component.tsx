import { FC } from "react";

import { IconKeys } from "../../../providers/theme/types/types";
import Icon from "../Icon/Icon.component";

import { StyledIconButton } from "./styles";

interface IconButtonProps {
    iconType: IconKeys;
    onClick?: () => void;
}

const IconButton:FC<IconButtonProps> = ({ iconType, onClick }) => (
    <StyledIconButton onClick={onClick}>
        <Icon type={iconType} color="dark10" />
    </StyledIconButton>
);

export default IconButton;
