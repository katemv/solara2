import { FC, ReactElement } from "react";

import { ColorsKeys } from "../../../providers/theme/types/types";
import { ButtonProps } from "../Button/Button.component";
import { SpinIcon } from "../Button/styles";
import Text from "../Text/Text.component";

import { LeftContent, RightContent, StyledButton } from "./styles";

export interface DoubleButtonProps extends Omit<ButtonProps, "appearance"> {
    intlKey?: string;
    color?: ColorsKeys;
    leftContent: ReactElement;
}

const DoubleButton: FC<DoubleButtonProps> = ({
    label,
    fullWidth,
    disabled,
    loading,
    leftContent,
    loadingLabel = "messages.loading",
    onClick,
    type = "button"
}) => {
    return (
        <StyledButton
            fullWidth={fullWidth}
            disabled={disabled || loading}
            loading={loading}
            onClick={onClick}
            type={type}
        >
            {loading ? (
                <SpinIcon type="progress_activity" />
            ) : (
                <LeftContent direction="column" align="start">
                    {leftContent}
                </LeftContent>
            )}
            <RightContent align="center">
                <Text
                    as="span"
                    intlKey={loading ? loadingLabel : label}
                    fontWeight={700}
                    textTransform="capitalize"
                />
            </RightContent>
        </StyledButton>
    );
};


export default DoubleButton;
