import { FC, ReactElement } from "react";

import { ColorsKeys } from "../../../providers/theme/types/types";
import { ButtonProps } from "../Button/Button.component";
import { SpinIcon } from "../Button/styles";
import Text from "../Text/Text.component";

import { LeftContent, LoadingContainer, RightContent, StyledButton } from "./styles";

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
    onClick,
    loadingLabel = "messages.loading",
    type = "button"
}) => {
    return (
        <StyledButton
            fullWidth={fullWidth}
            disabled={disabled || loading}
            onClick={onClick}
            type={type}
        >
            {loading ? (
                <LoadingContainer align="center" justify="center" gap="spacing4">
                    <SpinIcon type="progress_activity" />
                    <Text
                        as="span"
                        intlKey={loadingLabel}
                        fontWeight={700}
                        textTransform="capitalize"
                    />
                </LoadingContainer>
            ) : (
                <>
                    <LeftContent direction="column" align="start">
                        {leftContent}
                    </LeftContent>
                    <RightContent align="center" disabled={disabled}>
                        <Text
                            as="span"
                            intlKey={label}
                            fontWeight={700}
                            textTransform="capitalize"
                        />
                    </RightContent>
                </>
            )}
        </StyledButton>
    );
};


export default DoubleButton;
