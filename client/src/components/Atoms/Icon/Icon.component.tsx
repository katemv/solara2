import { FC } from "react";

import { StyledIcon } from "./styles";
import { ColorsKeys, IconKeys } from "../../../providers/theme/types/types";

export interface IconProps {
    type: IconKeys;
    color?: ColorsKeys;
    className?: string;
}

const Icon: FC<IconProps> = ({ type, className = "", color = "black60" }) => {
    return (
        <StyledIcon
            className={`material-symbols-outlined ${className}`}
            color={color}
        >
            {type}
        </StyledIcon>
    );
};

export default Icon;
