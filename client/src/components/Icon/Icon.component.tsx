import { FC } from "react";

import { StyledIcon } from "./styles";

interface IconProps {
    type: "progress_activity";
    className?: string;
}

const Icon: FC<IconProps> = ({ type, className = "" }) => {
    return <StyledIcon className={`material-symbols-outlined ${className}`}>{type}</StyledIcon>;
};

export default Icon;
