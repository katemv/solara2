import { FC } from "react";

import { StyledIcon } from "./styles";
import { ColorsKeys, IconKeys } from "../../../providers/theme/types/types";

export interface IconProps {
    type: IconKeys;
    color?: ColorsKeys;
    className?: string;
    filled?: boolean;
    size?: number;
}

const Icon: FC<IconProps> = ({ type, className = "", color = "dark80", filled = false, size = 24 }) => {
    return (
        <StyledIcon
            className={`material-symbols-outlined ${className}`}
            color={color}
            filled={filled}
            size={size}
        >
            {type}
        </StyledIcon>
    );
};

export default Icon;
